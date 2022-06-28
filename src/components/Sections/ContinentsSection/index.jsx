// React
import React from 'react'
// My components
import ContinentsBarChart from '../../Chart/BarChart/Continents'
import ContinentsTable from '../../Table/ContinentsTable'
// Mui components
import { Container, Typography, Grid, Card } from '@mui/material'
// Style
import styles from './index.module.scss'
// Others import 
import { motion } from 'framer-motion'

const ContinentsSection = () => {
    return (
        <Container
            className={styles.continentsContainer}
            sx={{ minHeight: '31.25rem' }}>

            {/* Title */}
            <Typography
                variant='h3'
                align='center'
                component={motion.div}
                sx={{ marginBottom: '1rem', backgroundColor: '#1a76d3', color: '#FAF8FF', borderRadius: '0.313rem'}}
                whileHover={{ backgroundColor: '#FAF8FF', color: '#1a76d3', outline:'1px solid #1a76d3'}}>
                Continents
            </Typography>


            {/* TODO Link ad ogni continente */}
            {/* Grid */}
            <Grid container spacing={2}>
                {/* Grid - Table */}
                <Grid item xs={12} md={6} lg={4} >
                    <Card sx={{ padding: '0.5rem' }}>
                        <ContinentsTable />
                    </Card>
                </Grid>

                {/* Grid - BarChart */}
                <Grid item xs={12} md={6} lg={8}>
                    <Card sx={{ minHeight: '100%', padding: '0.5rem' }}>
                        <ContinentsBarChart />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContinentsSection