import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Paper, Typography, useTheme } from '@mui/material';

import { get } from '../../axios';
import { Container } from '../../layout';
import { useUser } from '../../providers/UserProvider';

const Login = () => {
    const history = useHistory();
    const { palette } = useTheme();
    const { setUserID, setCredits } = useUser();

    const [error, setError] = useState(false);
    const [usernameInput, setUsernameInput] = useState('');

    const handleUsernameChange = ({ target: { value } }) => {
        if (error) setError(false);

        setUsernameInput(value);
    }

    const handleSubmit = async () => {
        try {
            const { status, data: user } = await get(`/user/auth/${usernameInput}`);
            if (status !== 200) return

            setUserID(user._id);
            setCredits(user.credits);
            history.push('/home');
        } catch (error) {
            setError(true);
            console.error(error);
        }
    }

    return (
        <Container sx={{ backgroundImage: palette.loginBackground }}>
            <Paper sx={{ height: '30%', width: '40%', backgroundColor: palette.paper }}>
                <Container sx={{ justifyContent: 'space-around' }}>
                    <Typography variant={'h4'}>
                        {'Login'}
                    </Typography>
                    <Input placeholder='Username' onChange={handleUsernameChange} />
                    {error && <Typography variant="caption" color="error">{'User Does Not Exist'}</Typography>}
                    <Button onClick={handleSubmit}>
                        {'Submit'}
                    </Button>
                </Container>
            </Paper>
        </Container>
    )

}

export default Login;