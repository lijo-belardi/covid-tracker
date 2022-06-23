import React from 'react'
import useApiClient from '../../hooks/useApiClient'


/* TODO completare */

const Continents = () => {
  const { data: continents, loading } = useApiClient('/v3/covid-19/continents')

  return (
    <div>
      {continents &&
        continents.map(continent => <h1 key={continent.continent}>{continent.continent}</h1>)
      }
    </div>
  )
}

export default Continents