import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { get } from '../../axios';
import { FullRow } from '../../layout';

const CompaniesTable = ({ handleCompanyClick }) => {
    const [error, setError] = useState(false);
    const [companies, setCompanies] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(async () => {
        try {
            const limit = 10;
            const { data: { companies, length } } = await get(`/company?page=${currentPage}&limit=${limit}`);

            setHasNextPage(currentPage < Math.ceil(length / limit));
            setCompanies(companies);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1)
    };

    return (
        <TableContainer component={Paper} sx={{ width: '60%', maxHeight: '80%', margin: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{'Name'}</TableCell>
                        <TableCell>{'Website'}</TableCell>
                        <TableCell>{'Size'}</TableCell>
                        <TableCell>{'Location'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companies ? companies.map(company => (
                        <TableRow key={company?._id} onClick={() => handleCompanyClick(company?._id)} sx={{ cursor: 'pointer' }}>
                            <TableCell>{company?.name}</TableCell>
                            <TableCell>{company?.website}</TableCell>
                            <TableCell>{company?.size}</TableCell>
                            <TableCell>{company?.location}</TableCell>
                        </TableRow>
                    ))
                        : <Typography>
                            {error ? 'ERROR: COULD NOT LOAD COMPANIES' : 'Loading...'}
                        </Typography>}
                </TableBody>
            </Table>
            <FullRow sx={{ justifyContent: 'space-around' }}>
                <Button disabled={currentPage === 1} onClick={handlePreviousPage} sx={{ margin: '5px' }}>{'Previous'}</Button>
                <Button disabled={!hasNextPage} onClick={handleNextPage} sx={{ margin: '5px' }}>{'Next'}</Button>
            </FullRow>
        </TableContainer>
    );
}

export default CompaniesTable;