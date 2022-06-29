import React from 'react'
// My components
import Header from '../../components/Header'
import Title from '../../components/Title'
import useApiClient from '../../hooks/useApiClient'
import CardInfo from '../../components/CardInfo'
import Footer from '../../components/Footer'
import ContinentsBarChart from '../../components/Chart/BarChart/Continents'
import NestedList from '../../components/List'
// MUI Components
import { Container, Card, Grid, Typography } from '@mui/material'
// Others import
import { motion } from 'framer-motion'

/* TODO cambiare chiamata API */
const Continents = () => {
  const { data: continents, loading } = useApiClient('/v3/covid-19/continents')
  console.log(continents);
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '6rem' }}>
        <Title text='Continents - Covid Situation' />
        <Card
          sx={{ padding: '1rem' }}
          component={motion.div}
          whileHover={{ outline: '1px solid #1a76d3' }}>
          <Typography variant='h5'>Description</Typography>
          {/* TODO cambiare contenuto della descrizione */}
          <Typography align='justify'>
            In this section, it is possible to view a table with all the world states, with the relative number of cases and deaths.
            By clicking on the name of the individual state, you can get more details on the dedicated page.
          </Typography>
        </Card>

        <Grid container spacing={2} sx={{marginTop: '1rem'}}>
          {continents &&
            continents?.map(continent => (
              <Grid item xs={12} sm={6} key={continent.continent}>
                <Card>
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
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>




      <Container sx={{ marginTop: '2rem', minHeight: '500px' }}>
        <Title text='Continents - Cases' />
        <Card sx={{ height: '500px', padding: '1rem' }}>
          <ContinentsBarChart />
        </Card>
      </Container>

    
      <Footer />
    </div>
  )
}

export default Continents