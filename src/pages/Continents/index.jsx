import React from 'react'
// My components
import Header from '../../components/Header'
import useApiClient from '../../hooks/useApiClient'


/* TODO completare */

const Continents = () => {
  const { data: continents, loading } = useApiClient('/v3/covid-19/continents')

  return (
    <div>
      <Header />
      {continents &&
        continents.map(continent => <h1 key={continent.continent}>{continent.continent}</h1>)
      }
    </div>
  )
}

export default Continents