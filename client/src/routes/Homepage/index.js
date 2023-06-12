import React, { useState } from 'react';
import { useTheme } from '@mui/material';

import { Container } from '../../layout';
import CompanyDisplay from './CompanyDisplay';
import NoCreditsModal from './NoCreditsModal';
import CompaniesTable from './CompaniesTable.js';
import { useUser } from '../../providers/UserProvider';

const Homepage = () => {
    const { palette } = useTheme();
    const { decrementCredit, credits } = useUser();

    const [companyID, setCompanyID] = useState();

    const handleCompanyClick = id => {
        setCompanyID(id);
        decrementCredit();
    }

    return (
        <Container sx={{ backgroundColor: palette.homeBackground, flexDirection: 'row', justifyContent: 'space-around' }}>
            {credits > 0 ?
                <>
                    <CompaniesTable handleCompanyClick={handleCompanyClick} />
                    <CompanyDisplay companyID={companyID} />
                </>
                :
                <NoCreditsModal open={credits <= 0} />
            }
        </Container>
    );
}

export default Homepage;