// React
import React from 'react'
// My components
import CountriesTable from '../../Table/CountriesTable'
import Title from '../../Title'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'
// Others import
import { motion } from 'framer-motion'

const AllCountries = () => {
    return (
        <Container className={styles.AllCountriesContainer}>
            <Title text='All Countries' />

            <CountriesTable />
        </Container>
    )
}

export default AllCountries