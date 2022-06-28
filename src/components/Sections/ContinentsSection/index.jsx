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
            <Typography
                variant='h3'
                align='center'
                sx={{ marginBottom: '1rem' }}
                component={motion.div}
                whileHover={{ scale: 0.99, color: '#2196f3' }}>
                Continents
            </Typography>
            {/* TODO Link ad ogni continente */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} >
                    {/* Table */}
                    <Card sx={{ padding: '0.5rem' }}>
                        <ContinentsTable />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    {/*  BarChart */}
                    <Card sx={{ minHeight: '100%', padding: '0.5rem' }}>
                        <ContinentsBarChart />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContinentsSection