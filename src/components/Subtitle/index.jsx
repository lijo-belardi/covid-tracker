import React, { useState, useEffect } from 'react'
// MUI Components
import { Typography, Grid, Card } from '@mui/material'
// Others import
import { motion } from 'framer-motion'

const Subtitle = ({ description, details, showDetails }) => {
    const [isDetails, setIsDetails] = useState()

    useEffect(() => {
        setIsDetails(showDetails);
    }, [])
    return (
        <>
            {isDetails ? (
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Card
                            sx={{ padding: '1rem' }}
                            component={motion.div}
                            whileHover={{ outline: '1px solid #1a76d3' }}>
                            <Typography variant='h5' sx={{ marginBottom: '0.5rem' }}>Description</Typography>
                            <Typography align='justify'> {description}</Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card
                            sx={{ padding: '1rem' }}
                            component={motion.div}
                            whileHover={{ outline: '1px solid #1a76d3' }}>
                            <Typography variant='h5' sx={{ marginBottom: '0.5rem' }}>Details</Typography>
                            <Typography align='justify'>{details}</Typography>
                        </Card>
                    </Grid>
                </Grid>) :
                (<Card
                    sx={{ padding: '1rem' }}
                    component={motion.div}
                    whileHover={{ outline: '1px solid #1a76d3' }}>
                    <Typography variant='h5' sx={{ marginBottom: '0.5rem' }}>Description</Typography>
                    <Typography align='justify'> {description}</Typography>
                </Card>)}
        </>)
}

export default Subtitle