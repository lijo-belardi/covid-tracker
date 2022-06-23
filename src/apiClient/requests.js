const requests = {
    allGlobalData: '/v3/covid-19/all?allowNull=0',
    last30DaysData: '/v3/covid-19/historical/all?lastdays=30',
    continentsData: '/v3/covid-19/continents',
    countriesCases: '/v3/covid-19/countries?sort=cases',
}
export default requests

/* TODO cambiare tutte le chiamate */