// React
import React, { useContext } from 'react'
// Contexts
import { AllGlobalDataContext } from '../../../context/AllGlobalData'
// My components
import CardInfo from '../../CardInfo'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const AllDataSection = () => {
    const [data, setData] = useContext(AllGlobalDataContext)

    return (
        <Container className={styles.globalDataContainer}>

            <Typography
                variant='h3'
                align='center'
                component={motion.div}
                sx={{ marginBottom: '1rem', backgroundColor: '#1a76d3', color: '#FAF8FF', borderRadius: '0.313rem' }}
                whileHover={{ backgroundColor: '#FAF8FF', color: '#1a76d3', outline: '1px solid #1a76d3' }}>
                Covid - global situation
            </Typography>


            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <CardInfo title='Cases' data={data.cases} todayData={data.todayCases} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardInfo title='Deaths' data={data.deaths} todayData={data.todayDeaths} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardInfo title='Recovered' data={data.recovered} todayData={data.todayRecovered} />
                </Grid>
            </Grid>

        </Container>
    )
}

export default AllDataSection