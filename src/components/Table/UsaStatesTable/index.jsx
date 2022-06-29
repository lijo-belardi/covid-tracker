// React
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { motion } from 'framer-motion';


const UsaStatesTable = () => {
    const [states, setStates] = useState([])
    const navigate = useNavigate()
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
                                    <Typography
                                        sx={{ maxWidth: 'fit-content' }}
                                        component={motion.div}
                                        whileHover={{ backgroundColor: '#1a76d3', color: '#FAF8FF', cursor: 'pointer' }}
                                        onClick={() => navigate(`/countries/usa/${state.state}`)}>
                                        {state.state}</Typography>
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
        </>
    )
}

export default UsaStatesTable



