import React, { useEffect, useState } from 'react';
import TokenIcon from '@mui/icons-material/Token';
import HttpsIcon from '@mui/icons-material/Https';
import WalletIcon from '@mui/icons-material/Wallet';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { Box, Divider, Link, Paper, Typography, useTheme } from '@mui/material';

import { get } from '../../axios';
import { Column, FullRow, Row } from '../../layout';

const CompanyDisplay = ({ companyID }) => {
    const { palette } = useTheme();

    const [company, setCompany] = useState();

    useEffect(async () => {
        if (!companyID) return

        try {
            const { data: company } = await get(`/company/${companyID}`);
            setCompany(company);
        } catch (error) {
            console.error(error);
        }
    }, [companyID])


    return (
        <>
            {company &&
                <Column sx={{ height: '80%', width: '30%', margin: '20px' }}>
                    <Paper sx={{ width: '100%', height: '100%', backgroundColor: palette.paper, overflow: 'scroll' }}>
                        <FullRow sx={{ justifyContent: 'flex-start', margin: '5px', overflow: 'hidden' }}>
                            <Box
                                sx={{ height: '75px', width: '75px', margin: '10px' }}
                                component={'img'}
                                src={company?.logo_url}
                            />
                            <Column sx={{ alignItems: 'left' }}>
                                <Typography>
                                    {company?.name}
                                </Typography>
                                <Link>
                                    <Typography>
                                        {company?.website}
                                    </Typography>
                                </Link>
                            </Column>
                        </FullRow>
                        <FullRow sx={{ justifyContent: 'space-around', overflow: 'hidden' }}>
                            <Column sx={{ margin: '5px' }}>
                                <Typography variant={'caption'}>
                                    {'Employees'}
                                </Typography>
                                <Typography>
                                    {company?.employees_count}
                                </Typography>
                            </Column>
                            <Column sx={{ margin: '5px' }}>
                                <Typography variant={'caption'}>
                                    {'Revenue'}
                                </Typography>
                                <Typography>
                                    {`$${company?.revenue_in_usd}`}
                                </Typography>
                            </Column>
                            <Column sx={{ margin: '5px' }}>
                                <Typography variant={'caption'}>
                                    {'Industry'}
                                </Typography>
                                <Typography>
                                    {company?.industry}
                                </Typography>
                            </Column>
                        </FullRow>
                        <Divider sx={{ margin: '20px' }} />
                        <FullRow sx={{ justifyContent: 'flex-start' }}>
                            <Column sx={{ alignItems: 'left', marginLeft: '20px' }}>
                                <Typography variant={'caption'}>
                                    {'About'}
                                </Typography>
                                <Typography paragraph>
                                    {company?.about}
                                </Typography>
                            </Column>
                        </FullRow>
                        <Divider sx={{ margin: '20px' }} />
                        <FullRow sx={{ justifyContent: 'flex-start' }}>
                            <Column sx={{ alignItems: 'left', marginLeft: '20px' }}>
                                <Typography variant={'caption'}>
                                    {'On-chain Overview'}
                                </Typography>
                                <Row sx={{ justifyContent: 'flex-start' }}>
                                    <WalletIcon fontSize='small' />
                                    <Typography sx={{ margin: '5px' }}>
                                        {'Active Wallets:'}
                                    </Typography>
                                    <Typography>
                                        {company?.active_wallets}
                                    </Typography>
                                </Row>
                                <Row sx={{ justifyContent: 'flex-start' }}>
                                    <TokenIcon fontSize='small' />
                                    <Typography sx={{ margin: '5px' }}>
                                        {'Token Name:'}
                                    </Typography>
                                    <Typography>
                                        {company?.token_name}
                                    </Typography>
                                </Row>
                                <Row sx={{ justifyContent: 'flex-start' }}>
                                    <HttpsIcon fontSize='small' />
                                    <Typography sx={{ margin: '5px' }}>
                                        {'TVL: $'}
                                    </Typography>
                                    <Typography>
                                        {company?.tvl_usd}
                                    </Typography>
                                </Row>
                                <Row sx={{ justifyContent: 'flex-start' }}>
                                    <RequestPageIcon fontSize='small' />
                                    <Typography sx={{ margin: '5px' }}>
                                        {'Smart Contracts:'}
                                    </Typography>
                                    <Typography>
                                        {company?.smart_contract_count}
                                    </Typography>
                                </Row>
                            </Column>
                        </FullRow>
                    </Paper>
                </Column>
            }
        </>
    );
}

export default CompanyDisplay;