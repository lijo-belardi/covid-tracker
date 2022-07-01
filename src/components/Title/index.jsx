import React from 'react'
// Mui Components
import { Typography } from '@mui/material'
// Others imports

const Title = (props) => {
    return (
        <Typography
            variant='h3'
            align='center'
            sx={{
                marginBottom: '1rem',
                backgroundColor: '#1a76d3',
                color: '#FAF8FF',
                borderRadius: '0.313rem',
                padding: '0.5rem'
            }}>
            {props.text}
        </Typography>
    )
}

export default Title