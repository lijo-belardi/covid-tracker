import React from 'react'
// My components
import Title from '../../components/Title'
import useApiClient from '../../hooks/useApiClient'
import ErrorBoundary from '../../components/ErrorBoundary'
import ContinentsBarChart from '../../components/Chart/BarChart/Continents'
import NestedList from '../../components/List'
import Subtitle from '../../components/Subtitle'
// MUI Components
import { Container, Card, Grid } from '@mui/material'
// Others import
import { motion } from 'framer-motion'
import ContinentsRadarChart from '../../components/Chart/Radar/Continents'
import requests from '../../apiClient/requests'

const Continents = () => {
  const { data: continents } = useApiClient(requests.continentsData)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
      exit={{ opacity: 0 }}>

      {/* Continents - Title */}
      <Container sx={{ marginTop: '4rem' }}>
        <Title text='Continents - Covid Situation' />
        <Subtitle
          isDetails={false}
          description="In this section, you can view the 
          details on the individual continents." />

        {/*  Continents - List */}
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          {continents &&
            continents?.map(continent => (
              <Grid item xs={12} sm={6} key={continent.continent}>
                <Card
                  component={motion.div}
                  whileHover={{ outline: '1px solid #1a76d3' }}>
                  <ErrorBoundary>
                    <NestedList
                      continentName={continent.continent}
                      population={continent.population}
                      coordinates={continent.continentInfo}
                      cases={continent.cases}
                      todayCases={continent.todayCases}
                      deaths={continent.deaths}
                      todayDeaths={continent.todayDeaths}
                      recovered={continent.recovered}
                      todayRecovered={continent.todayRecovered}
                      countries={continent.countries}
                    />
                  </ErrorBoundary>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>

      {/* Continents - BarChart */}
      <Container sx={{ marginTop: '2rem', minHeight: '500px' }}>
        <Title text='Continents - Bar Chart' />
        <Card
          sx={{ height: ['350px', '400px', '450px'], padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <ErrorBoundary>
            <ContinentsBarChart />
          </ErrorBoundary>
        </Card>
      </Container>

      {/* Continents - RadarChart */}
      <Container sx={{ marginTop: '2rem', minHeight: '400px' }}>
        <Title text='Continents - Radar Chart' />
        <Card
          sx={{ minHeight: '400px', padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <ErrorBoundary>
            <ContinentsRadarChart />
          </ErrorBoundary>
        </Card>
      </Container>
    </motion.div>
  )
}

export default Continents