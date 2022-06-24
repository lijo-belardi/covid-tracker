// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Line } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// Others import
import apiClient from '../../../../../../apiClient'
import requests from '../../../../../../apiClient/requests'
import logErrors from '../../../../../../utility/consoleShortcuts'

// ChartJs Register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChartUSALast30DaysDeaths = () => {
    const [deaths, setDeaths] = useState({})
    let dates = Object.keys(deaths)
    let deathsDateValue = Object.values(deaths)

    const data = {
        labels: dates.map(singleDay => singleDay),
        datasets: [
            {
                label: 'Cases',
                backgroundColor: '#AE3813',
                borderColor: '#AE3813',
                data: deathsDateValue.map(dateValue => dateValue),
            }
        ]
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await apiClient.get(requests.usaLast30Days)
                setDeaths(response.data.timeline.deaths)
            } catch (error) {
                logErrors(error)
            }
        }
        getData()
    }, [])


    return (<Line data={data} style={{ maxHeight: 400 }} />)
}

export default LineChartUSALast30DaysDeaths