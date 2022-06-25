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
import requests from '../../../apiClient/requests';
import millify from 'millify'


const UsaStatesTable = () => {
    const [states, setStates] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get(requests.usaStates)
            console.log(response.data)
            setStates(response.data)
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
                <Table align='center' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>State</TableCell>
                            <TableCell align="center">Cases</TableCell>
                            <TableCell align="center">Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {states?.map((state) => (
                            <TableRow
                                key={state.state}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* State - name */}
                                <TableCell align="center">
                                    <Link to={`/countries/usa/${state.state}`}>{state.state}</Link>
                                    </TableCell>
                                {/* State - cases */}
                                <TableCell align="center">{millify(state.cases)}</TableCell>
                                {/* State - deaths */}
                                <TableCell align="center">{millify(state.deaths)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UsaStatesTable



