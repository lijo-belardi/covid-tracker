// React
import React from 'react'
// My Components
import ErrorBoundary from '../../components/ErrorBoundary'
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
import LineChartUSALast30DaysData from '../../components/Chart/LineChart/USA/Last30Days'
import UsaStatesTable from '../../components/Table/UsaStatesTable'
import BarChartUSALast30Days from '../../components/Chart/BarChart/USA'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import Subtitle from '../../components/Subtitle'

// MUI Components
import { Container, Grid, Typography, Card, Box } from '@mui/material'
// Others import
import useApiClient from '../../hooks/useApiClient'
import requests from '../../apiClient/requests'
// Styles
import styles from './index.module.scss'
import millify from 'millify'
import { motion } from 'framer-motion'


const USAPage = () => {
  const { data: country, loading, error } = useApiClient(requests.usaData)

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Title */}
      <Container className={styles.titleContainer}>
        {country && <Title text={`${country.country} - Covid situation`} />}
      </Container>

      <Container>
        {/* CardInfo */}
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

        {loading && <Typography variant='h2'>Loading</Typography>}
      </Container>

      {/*  Last 30 days section */}
      <Container sx={{ marginTop: '3rem' }}>
        {/* Last 30 days - Title */}
        <Title text='Last 30 Days' />
        {/* LineChart*/}
        <Card sx={{ padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <ErrorBoundary>
            <LineChartUSALast30DaysData />
          </ErrorBoundary>
        </Card>
      </Container>

      {/*  USA - countries's table */}
      <Container sx={{ marginTop: '3rem' }}>
        {/* Title */}
        <Title text='All Americans state - Table' />
        {/* Subtitle */}
        <Subtitle
          showDetails={true}
          description="In this section, it is possible to view a table with all the USA's states,
          with the relative number of cases and deaths."
          details="By clicking on the name of the individual state, 
          you can get more details on the dedicated page."
        />
        {/* Table */}
        <Card
          sx={{ marginTop: '2rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <ErrorBoundary>
            <UsaStatesTable />
          </ErrorBoundary>
        </Card>
      </Container>

      {/*  USA - States's BarChart */}
      <Container sx={{ marginTop: '3rem', minHeight: '700px' }}>
        <Title text='All Americans state - Bar Chart' />
        <ErrorBoundary>
          <Card
            sx={{ minHeight: '700px', padding: '1rem' }}
            component={motion.div}
            whileHover={{ outline: '1px solid #1a76d3' }}>
            <BarChartUSALast30Days />
          </Card>
        </ErrorBoundary>
      </Container>
      <Footer />
    </div>
  )
}

export default USAPage