// React
import React, { useEffect, useState } from 'react'
// MUI Components
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
import millify from 'millify'

const UsaStatesTable = () => {
    const [states, setStates] = useState([])
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get(requests.usaStates)
            setStates(response.data)
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
                            <TableCell align='left' sx={{ fontWeight: 'bold' }}>State</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Cases</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Deaths</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Today Cases</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Today Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {states?.map((state) => (
                            <TableRow
                                key={state.state}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* State - name */}
                                <TableCell>
                                    <Typography>{state.state}</Typography>
                                </TableCell>
                                {/* State - cases */}
                                <TableCell align="center">{millify(state.cases)}</TableCell>
                                {/* State - deaths */}
                                <TableCell align="center">{millify(state.deaths)}</TableCell>
                                <TableCell align="right">{millify(state.todayCases)}</TableCell>
                                <TableCell align="right">{millify(state.todayDeaths)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UsaStatesTable



