import React from 'react'
// MUI components
import { Typography, Card } from '@mui/material'
// Style
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const CardInfo = (props) => {
    return (
        <Card
            className={styles.card}
            component={motion.div}
            whileHover={{ scale: 0.99, backgroundColor: '#2196f3', color: '#FAF8FF' }}>
            <Typography variant='h5'> {props.title}</Typography>
            <Typography>Total: {props.data}</Typography>
            <Typography>Today: {props.todayData}</Typography>
        </Card>
    )
}

export default CardInfo