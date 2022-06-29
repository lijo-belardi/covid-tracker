// React
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


// Mui components
import { Typography } from '@mui/material';

// MUI Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Others import
import apiClient from '../../../apiClient';
import logErrors from '../../../utility/consoleShortcuts'
import requests from '../../../apiClient/requests';
import { motion } from 'framer-motion';


const CountriesTable = () => {
    const [countries, seCountries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get(requests.countriesCases)
            seCountries(response.data)
        } catch (error) {
            logErrors(error)
        }
    }

    return (
        <>
            <TableContainer
                component={Paper}
                sx={{ height: ['300px', '500px'] }}>
                <Table align='center' aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Country</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'bold' }}>Flag</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Cases</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries?.map((country) => (
                            <TableRow
                                key={country.country}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography
                                        sx={{ maxWidth: 'fit-content' }}
                                        component={motion.div}
                                        whileHover={{ backgroundColor: '#1a76d3', color: '#FAF8FF', cursor: 'pointer' }}
                                        onClick={() => navigate(`/countries/${country.country}`)}>
                                        {country.country}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <img
                                        style={{ width: '30px' }}
                                        src={country.countryInfo.flag}
                                        alt={country.countryInfo.flag}
                                    />
                                </TableCell>
                                <TableCell align="center">{country.cases}</TableCell>
                                <TableCell align="center">{country.deaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CountriesTable



