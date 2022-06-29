import React from 'react'
// My components
import LineChartAllLast30DaysCases from '../../Chart/LineChart/Last30Days/Cases'
import LineChartAllLast30DaysDeaths from '../../Chart/LineChart/Last30Days/Deaths'
import Title from '../../Title'
// Mui components
import { Container, Typography, Grid, Card } from '@mui/material'
// Style
import styles from './index.module.scss'
// Others import
import { motion } from 'framer-motion'

const Last30DaysSection = () => {
    return (
        <Container className={styles.Last30DaysContainer}>
            {/* Title */}
            <Title text='Last 30 days' />

            {/* TODO migliorare vista griglia */}
            {/* TODO testare responsività */}
            <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                    <Card className={styles.lineChartCard}
                        component={motion.div}
                        whileHover={{ outline: '1px solid #1a76d3' }}>
                        <Typography variant='h5'>Cases</Typography>
                        <LineChartAllLast30DaysCases />
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card className={styles.lineChartCard}
                        component={motion.div}
                        whileHover={{ outline: '1px solid #1a76d3' }}>
                        <Typography variant='h5'>Deaths</Typography>
                        <LineChartAllLast30DaysDeaths />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Last30DaysSection