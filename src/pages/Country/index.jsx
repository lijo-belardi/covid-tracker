// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// My Components
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
// Mui Components
import { Typography, Container, Grid, Card } from '@mui/material'
// Others import 
import apiClient from '../../apiClient'
import logErrors from '../../utility/consoleShortcuts'
// Styles
import styles from './index.module.scss'

const Country = () => {
    let params = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        getCountryDetails()
    }, [params.country])

    const getCountryDetails = async () => {
        try {
            const response = await apiClient.get(`/v3/covid-19/countries/${params.country}?strict=true`)
            console.log(response.data);
            setCountry(response.data)
        } catch (error) {
            logErrors(error)
        }
    }

    return (
        <div>
            <Header />
            <Container className={styles.titleContainer}>
                <Typography variant='h3'>{country.country} - Covid Situation</Typography>
            </Container>

            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <CardInfo title='Cases' data={country.cases} todayData={country.todayCases} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardInfo title='Deaths' data={country.deaths} todayData={country.todayDeaths} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardInfo title='Recovered' data={country.recovered} todayData={country.todayRecovered} />
                    </Grid>
                </Grid>
            </Container>

            <Container className={styles.otherInfo}>
                <Card className={styles.otherInfoCard}>
                    <Typography variant='h4'>Other Information</Typography>
                    <Typography variant='h6'>
                        Continent: {country.continent}
                    </Typography>

                    <Typography variant='h6'>
                        Population: {country.population}
                    </Typography>
                </Card>
            </Container>

        </div>
    )
}

export default Country