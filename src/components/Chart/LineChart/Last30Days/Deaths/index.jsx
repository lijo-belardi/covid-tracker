// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Line } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// Others import
import apiClient from '../../../../../apiClient'
import logErrors from '../../../../../utility/consoleShortcuts'


// ChartJs Register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChartAllLast30DaysDeaths = () => {
    const [deaths, setDeaths] = useState({})
    let date = Object.keys(deaths)
    let deathsDateValue = Object.values(deaths)

    const data = {
        labels: date.map(day => day),
        datasets: [
            {
                label: 'Deaths',
                backgroundColor: '#1a76d3',
                borderColor: '#1a76d3',
                data: deathsDateValue.map(singleValue => singleValue),
            }
        ]
    };

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get('/v3/covid-19/historical/all?lastdays=30')            
            setDeaths(response.data.deaths)
        } catch (error) {
            logErrors(error)
        }
    }

    return (<Line data={data} style={{ maxHeight: 400 }} />)
}

export default LineChartAllLast30DaysDeaths