const requests = {
    allGlobalData: '/v3/covid-19/all?allowNull=0',
    continentsData: '/v3/covid-19/continents',
    countriesCases: '/v3/covid-19/countries?sort=cases',
    usaData: '/v3/covid-19/countries/usa?strict=true',
    last30DaysData: '/v3/covid-19/historical/all?lastdays=30',
    usaLast30Days: '/v3/covid-19/historical/usa?lastdays=30'
}
export default requests

/* TODO cambiare tutte le chiamate */