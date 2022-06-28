// React
import React from 'react'
// My components
import CountriesTable from '../../Table/CountriesTable'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'
// Others import
import { motion } from 'framer-motion'

const AllCountries = () => {
    return (
        <Container className={styles.AllCountriesContainer}>
            <Typography
                variant='h3'
                align='center'
                component={motion.div}
                sx={{ marginBottom: '1rem', backgroundColor: '#1a76d3', color: '#FAF8FF', borderRadius: '0.313rem' }}
                whileHover={{ backgroundColor: '#FAF8FF', color: '#1a76d3', outline: '1px solid #1a76d3' }}>
                All Countries
            </Typography>

            <CountriesTable />
        </Container>
    )
}

export default AllCountries