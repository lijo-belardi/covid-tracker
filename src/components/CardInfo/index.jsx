import React from 'react'
// MUI components
import { Typography, Card } from '@mui/material'
// Style
import styles from './index.module.scss'

const CardInfo = (props) => {
    console.log(props);
    return (
        <Card className={styles.card}>
            <Typography variant='h5'> {props.title}</Typography>
            <p>Total: {props.data}</p>
            <p>Today: {props.todayData}</p>
        </Card>
    )
}

export default CardInfo