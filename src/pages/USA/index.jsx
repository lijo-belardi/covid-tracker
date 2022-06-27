// React
import React from 'react'
// My Components
import ErrorBoundary from '../../components/ErrorBoundary'
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
import LineChartUSALast30DaysCases from '../../components/Chart/LineChart/USA/Last30Days/Cases'
import LineChartUSALast30DaysDeaths from '../../components/Chart/LineChart/USA/Last30Days/Deaths'
import UsaStatesTable from '../../components/Table/UsaStatesTable'

// MUI Components
import { Container, Grid, Typography, Card } from '@mui/material'
// Others import
import useApiClient from '../../hooks/useApiClient'
import requests from '../../apiClient/requests'
// Styles
import styles from './index.module.scss'
import millify from 'millify'
import { Line } from 'react-chartjs-2'


const USAPage = () => {
  const { data: country, loading, error } = useApiClient(requests.usaData)
  //console.log(country);
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
        {loading && <h1>Loading</h1>} {/* TODO migliorare */}
      </Container>

      {/*  Last 30 days - LineCharts */}
      <Container> {/* TODO migliorare graficamente */}
        <ErrorBoundary>
          <Typography variant='h3'>Last 30 Days</Typography>
          <Card>
            <Typography variant='h4'>Cases</Typography>
            <LineChartUSALast30DaysCases />
          </Card>
        </ErrorBoundary>

        <ErrorBoundary>
          <Card>
            <Typography variant='h4'>Deaths</Typography>
            <LineChartUSALast30DaysDeaths />
          </Card>
        </ErrorBoundary>
      </Container>

      {/*  USA - countries's table */}
      <Container>
        <Card>
          <ErrorBoundary>
            <UsaStatesTable />
          </ErrorBoundary>
        </Card>
      </Container>

      {/* TODO BArchart con gli state */}
    </div>
  )
}

export default USAPage