import React from 'react'
// Mui Components
import { Typography } from '@mui/material'
// Others imports
import { motion } from 'framer-motion'

const Title = (props) => {
    return (
        <Typography
            variant='h3'
            align='center'
            component={motion.div}
            sx={{ marginBottom: '1rem', backgroundColor: '#1a76d3', color: '#FAF8FF', borderRadius: '0.313rem' }}
            whileHover={{ backgroundColor: '#FAF8FF', color: '#1a76d3', outline: '1px solid #1a76d3' }}>
            {props.text}
        </Typography>
    )
}

export default Title