// React
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// MUI
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
// Others import
import apiClient from '../../../apiClient'

const ContinentsTable = () => {
    const [continentsData, setContinentsData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get('/v3/covid-19/continents')
            setContinentsData(response.data)
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><strong>Continent</strong></TableCell>
                    <TableCell ><strong>Cases</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {continentsData?.map((continent) => (
                    <TableRow
                        key={continent.continent}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell scope="row">
                            {continent.continent}
                        </TableCell>
                        <TableCell>{continent.cases}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}

export default ContinentsTable