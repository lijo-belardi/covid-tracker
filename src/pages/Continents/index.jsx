import React from 'react'
// My components
import Header from '../../components/Header'
import Title from '../../components/Title'
import useApiClient from '../../hooks/useApiClient'
import ErrorBoundary from '../../components/ErrorBoundary'
import Footer from '../../components/Footer'
import ContinentsBarChart from '../../components/Chart/BarChart/Continents'
import NestedList from '../../components/List'
import Subtitle from '../../components/Subtitle'
// MUI Components
import { Container, Card, Grid } from '@mui/material'
// Others import
import { motion } from 'framer-motion'
import ContinentsRadarChart from '../../components/Chart/Radar/Continents'

/* TODO cambiare chiamata API */
/* TODO Aggiungere commenti */
const Continents = () => {
  const { data: continents, loading } = useApiClient('/v3/covid-19/continents')
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '4rem' }}>
        <Title text='Continents - Covid Situation' />
        <Subtitle
          isDetails={false}
          description="In this section, you can view the 
          details on the individual continents." />

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

      <Container sx={{ marginTop: '2rem', minHeight: '500px' }}>
        <Title text='Continents - Bar Chart' />
        <Card
          sx={{ height: '500px', padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <ErrorBoundary>
            <ContinentsBarChart />
          </ErrorBoundary>
        </Card>
      </Container>

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

      <Footer />
    </div>
  )
}

export default Continents