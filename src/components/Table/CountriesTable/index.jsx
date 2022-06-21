// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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


const CountriesTable = () => {
    const [countries, seCountries] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get('/v3/covid-19/countries?sort=cases')
            seCountries(response.data)
        } catch (error) {
            logErrors(error)
        }
    }

    return (
        <div>
            {/* TODO migliorare generalmente la tabella
            - vedere sistema di paginazione.
            */}

            <TableContainer component={Paper}>
                <Table align='center' sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align='center'>Flag</TableCell>
                            <TableCell align="center">Cases</TableCell>
                            <TableCell align="center">Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries?.map((country) => (
                            <TableRow
                                key={country.country}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {/* TODO riguardare per aggiungere il Link */}
                                    <Link to={`/countries/${country.country}`}>
                                    {country.country}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    {/* TODO valutare se fare Context per le bandiere con localStorage */}
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
        </div>
    )
}

export default CountriesTable



