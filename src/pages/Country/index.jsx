// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// My Components
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
import Title from '../../components/Title'
import ErrorBoundary from '../../components/ErrorBoundary'
import BarChartCountry from '../../components/Chart/BarChart/Country'
// Mui Components
import { Typography, Container, Grid, Card } from '@mui/material'
// Others import 
import apiClient from '../../apiClient'
import logErrors from '../../utility/consoleShortcuts'
import { motion } from 'framer-motion'
// Styles
import styles from './index.module.scss'
import Footer from '../../components/Footer'
import LineChartCountryLast30Days from '../../components/Chart/LineChart/Country'

const Country = () => {
    let params = useParams()
    const [country, setCountry] = useState([])
    const [last30DaysData, setLast30DaysData] = useState([])
    let dates = Object.keys(last30DaysData)

    useEffect(() => {
        async function getCountryDetails() {
            try {
                const response = await apiClient.get(`/v3/covid-19/countries/${params.country}?strict=true`)

                setCountry(response.data)
            } catch (error) {
                logErrors(error)
            }
        }
        getCountryDetails()
    }, [params.country])

    useEffect(() => {
        async function getLast30DaysData() {
            try {
                const response = await apiClient.get(`/v3/covid-19/historical/${params.country}?lastdays=30`)
                console.log(response.data);
                setLast30DaysData(response.data)
            } catch (error) {
                logErrors(error)
            }
        }
        getLast30DaysData()
    }, [params.country])


    return (
        <div>
            {/* Header */}
            <Header />

            {/* Title */}
            <Container className={styles.titleContainer}>
                <Title text={`${country.country} - Covid Situation`} />
            </Container>

            {/* Basic info */}
            <Container className={styles.otherInfo}>
                <Card className={styles.otherInfoCard}>
                    <Typography variant='h4'>
                        Information
                    </Typography>

                    <Typography variant='h6'>
                        Continent: {country.continent} {/* TODO link alla pagina del continente */}
                    </Typography>

                    <Typography variant='h6'>
                        Population: {country.population}
                    </Typography>
                </Card>
            </Container>

            {/* Card Info */}
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Cases'
                            data={country.cases}
                            todayData={country.todayCases} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Deaths'
                            data={country.deaths}
                            todayData={country.todayDeaths} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Recovered'
                            data={country.recovered}
                            todayData={country.todayRecovered} />
                    </Grid>
                </Grid>
            </Container>

            {/* BarChart */}
            <Container sx={{ marginTop: '2rem' }}>
                <Title text='Bar Chart' />
                {/* Description */}
                <Card
                    sx={{ padding: '1rem' }}
                    component={motion.div}
                    whileHover={{ outline: '1px solid #1a76d3' }}>
                    <Typography variant='h5'>Description</Typography>
                    <Typography align='justify'>
                        The bar graph shows the total number of cases, deaths,
                        and recovered in {country.country}.</Typography>
                </Card>

                <Card
                    sx={{ minHeight: '25rem', padding: '1rem', marginTop: '2rem' }}
                    component={motion.div}
                    whileHover={{ outline: '1px solid #1a76d3' }}>
                    <ErrorBoundary>
                        <BarChartCountry
                            cases={country.cases}
                            deaths={country.deaths}
                            recovered={country.recovered} />
                    </ErrorBoundary>
                </Card>
            </Container>


            <Container sx={{ marginTop: '2rem' }}>
                <Title text='Line Chart' />
                {/* Description */}
                <Card
                    sx={{ padding: '1rem' }}
                    component={motion.div}
                    whileHover={{ outline: '1px solid #1a76d3' }}>
                    <Typography variant='h5'>Description</Typography>
                    <Typography align='justify'>
                        The Line graph shows the total number of cases and deaths in {country.country}.</Typography>
                </Card>
                <Card
                    sx={{ minHeight: '25rem', padding: '1rem', marginTop: '2rem' }}
                    component={motion.div}
                    whileHover={{ outline: '1px solid #1a76d3' }}>
                    <ErrorBoundary>
                        <LineChartCountryLast30Days countryName={params.country} />
                    </ErrorBoundary>
                </Card>
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Country