import React from 'react'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'

const Last30DaysSection = () => {
  return (
    <Container className={styles.Last30DaysContainer}>
        <Typography variant='h3' align='left'>Last 30 days</Typography>
    </Container>
  )
}

export default Last30DaysSection