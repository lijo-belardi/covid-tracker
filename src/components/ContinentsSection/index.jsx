import React from 'react'

// My components
import ContinentsBarChart from '../Chart/BarChart/Continents'
// Mui components
import { Container, Typography, Grid, Card } from '@mui/material'
// Style
import styles from './index.module.scss'

const ContinentsSection = () => {
    return (
        <Container className={styles.continentsContainer}> {/* TODO aggiungere margin-top e min-height */}
            <Typography variant='h3' align='center'>Continents</Typography>
            {/* TODO tabella con dentro i continenti */}
            {/* Link ad ogni continente */}
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <Card>
                        <ContinentsBarChart />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContinentsSection