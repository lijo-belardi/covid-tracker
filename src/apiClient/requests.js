const requests = {
    allGlobalData: `${process.env.REACT_APP_BASE_URL}/v3/covid-19/all?allowNull=0`,
    last30DaysData: `${process.env.REACT_APP_BASE_URL}/v3/covid-19/historical/all?lastdays=30`,
    continentsData: `${process.env.REACT_APP_BASE_URL}/v3/covid-19/continents`,
    countriesCases: `${process.env.REACT_APP_BASE_URL}/v3/covid-19/countries?sort=cases`,
}

export default requests