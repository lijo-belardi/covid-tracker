// React
import React from 'react'
// My Components
import ErrorBoundary from '../../components/ErrorBoundary'
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
import LineChartUSALast30DaysCases from '../../components/Chart/LineChart/USA/Last30Days/Cases'
import LineChartUSALast30DaysDeaths from '../../components/Chart/LineChart/USA/Last30Days/Deaths'
import UsaStatesTable from '../../components/Table/UsaStatesTable'
import BarChartUSALast30DaysCases from '../../components/Chart/BarChart/USA'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

// MUI Components
import { Container, Grid, Typography, Card } from '@mui/material'
// Others import
import useApiClient from '../../hooks/useApiClient'
import requests from '../../apiClient/requests'
// Styles
import styles from './index.module.scss'
import millify from 'millify'
import { motion } from 'framer-motion'


const USAPage = () => {
  const { data: country, loading, error } = useApiClient(requests.usaData)
  //console.log(country);
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

        {/* Last 30 days - LineCharts's Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            {/* LineChart - Cases */}
            <Card sx={{ padding: '1rem' }}
              component={motion.div}
              whileHover={{ outline: '1px solid #1a76d3' }}>
              <Typography variant='h5'>Cases</Typography>
              <ErrorBoundary>
                <LineChartUSALast30DaysCases />
              </ErrorBoundary>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            {/* LineChart - Deaths */}
            <Card sx={{ padding: '1rem' }}
              component={motion.div}
              whileHover={{ outline: '1px solid #1a76d3' }}>
              <Typography variant='h5'>Deaths</Typography>
              <ErrorBoundary>
                <LineChartUSALast30DaysDeaths />
              </ErrorBoundary>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/*  USA - countries's table */}
      <Container sx={{ marginTop: '3rem' }}>
        {/* Title */}
        <Title text='All Americans state' />
        {/* Description */}
        <Card
          sx={{ padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <Typography variant='h5'>Description</Typography>
          <Typography align='justify'>
            In this section, it is possible to view a table with all the USA's states, with the relative number of cases and deaths.
            By clicking on the name of the individual state, you can get more details on the dedicated page.
          </Typography>
        </Card>

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
        <ErrorBoundary>
          <Card
            sx={{ minHeight: '700px', padding: '1rem' }}
            component={motion.div}
            whileHover={{ outline: '1px solid #1a76d3' }}>
            <Typography variant='h5'>Cases and Deaths in the last 30 days</Typography>
            <BarChartUSALast30DaysCases />
          </Card>
        </ErrorBoundary>
      </Container>
      <Footer />
    </div>
  )
}

export default USAPage