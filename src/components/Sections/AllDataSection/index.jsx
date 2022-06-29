// React
import React, { useContext } from 'react'
// Contexts
import { AllGlobalDataContext } from '../../../context/AllGlobalData'
// My components
import CardInfo from '../../CardInfo'
import Title from '../../Title'
// Mui components
import { Container, Typography, Grid } from '@mui/material'
// Style
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const AllDataSection = () => {
    const [data, setData] = useContext(AllGlobalDataContext)

    return (
        <Container className={styles.globalDataContainer}>

            <Title text='Covid - global situation' />
            
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