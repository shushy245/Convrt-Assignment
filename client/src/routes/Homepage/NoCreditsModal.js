import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal, Paper, Typography, useTheme } from '@mui/material';

import { Container, FullColumn } from '../../layout';
import { useUser } from '../../providers/UserProvider';

const NoCreditsModal = ({ open }) => {
    const history = useHistory();
    const { palette } = useTheme();
    const { resetUser } = useUser();

    const handleLogOut = () => {
        resetUser();
        history.push('/login');
    }

    return (
        <Modal component={Container} open={open} sx={{ backgroundImage: palette.loginBackground }}>
            <Paper sx={{ height: '40%', width: '50%' }}>
                <FullColumn sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                    <Typography variant={'h3'}>
                        {'Oops! You’re out of credits.'}
                    </Typography>
                    <Typography variant={'h4'}>
                        {'Contact the administrators.'}
                    </Typography>
                    <Button onClick={handleLogOut}>
                        {'Log Out'}
                    </Button>
                </FullColumn>
            </Paper>
        </Modal>
    );
}

export default NoCreditsModal;