// React
import React from 'react'
// My components
import CountriesTable from '../../Table/CountriesTable'
import Title from '../../Title'
// Mui components
import { Container, Typography, Card } from '@mui/material'
// Style
import styles from './index.module.scss'
// Others import
import { motion } from 'framer-motion'

const AllCountries = () => {
    return (
        <Container className={styles.AllCountriesContainer}>
            <Title text='All Countries' />
            <Card
                sx={{ padding: '1rem' }}
                component={motion.div}
                whileHover={{ outline: '1px solid #1a76d3' }}>
                <Typography variant='h5'>Description</Typography>
                <Typography align='justify'>
                    In this section, it is possible to view a table with all the world states, with the relative number of cases and deaths.
                    By clicking on the name of the individual state, you can get more details on the dedicated page.
                </Typography>
            </Card>
            <Card
                sx={{ marginTop: '1rem' }}
                component={motion.div}
                whileHover={{ outline: '1px solid #1a76d3' }}>
                <CountriesTable />
            </Card>
        </Container>
    )
}

export default AllCountries