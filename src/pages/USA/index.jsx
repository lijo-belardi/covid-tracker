// React
import React from 'react'
// My Components
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
// MUI Components
import { Container, Grid } from '@mui/material'
// Others import
import useApiClient from '../../hooks/useApiClient'
import requests from '../../apiClient/requests'
// Styles
import styles from './index.module.scss'
import millify from 'millify'

const USAPage = () => {
  const { data: country, loading, error } = useApiClient(requests.usaData)
  console.log(country);
  return (
    /* TODO aggiungere Typograhy */
    <div>
      <Header />
      <Container className={styles.titleContainer}>
        {country && <h1>{country.country}</h1>}
      </Container>

      <Container>
        {country && <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <CardInfo
              title='Cases'
              data={millify(country.cases)}
              todayData={country.todayCases} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardInfo
              title='Deaths'
              data={millify(country.deaths)}
              todayData={country.todayDeaths} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardInfo
              title='Recovered'
              data={millify(country.recovered)}
              todayData={country.todayRecovered} />
          </Grid>
        </Grid>}
      </Container>
    </div>
  )
}

export default USAPage