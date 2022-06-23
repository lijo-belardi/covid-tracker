// React
import React from 'react'
// My components
import CountriesTable from '../../Table/CountriesTable'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'

const AllCountries = () => {
    return (
        <Container className={styles.AllCoutriesContainer}>
            <Typography variant='h3' align='center'>
                All Countries
            </Typography>

            <CountriesTable />
        </Container>
    )
}

export default AllCountries