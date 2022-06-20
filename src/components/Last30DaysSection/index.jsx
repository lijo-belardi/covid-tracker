import React from 'react'
// My components
import LineChartAllLast30DaysCases from '../LineChart/Last30Days/Cases'
import LineChartAllLast30DaysDeaths from '../LineChart/Last30Days/Deaths'

// Mui components
import { Container, Typography, Grid, Card } from '@mui/material'
// Style
import styles from './index.module.scss'

const Last30DaysSection = () => { 
    return (
        <Container className={styles.Last30DaysContainer}>
            <Typography variant='h3' align='center'>Last 30 days</Typography>

            <Grid container spacing={4}>
                <Grid item lg={12}>
                    <Card>
                        <LineChartAllLast30DaysCases />
                    </Card>
                </Grid>
                <Grid item lg={12}>
                    <Card>
                        <LineChartAllLast30DaysDeaths />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Last30DaysSection