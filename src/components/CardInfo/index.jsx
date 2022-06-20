import React from 'react'
// MUI components
import { Typography, Card } from '@mui/material'
// Style
import styles from './index.module.scss'

const CardInfo = (props) => {
    return (
        <Card className={styles.card}>
            <Typography variant='h5'> {props.title}</Typography>
            <Typography>Total: {props.data}</Typography>
            <Typography>Today: {props.todayData}</Typography>
        </Card>
    )
}

export default CardInfo