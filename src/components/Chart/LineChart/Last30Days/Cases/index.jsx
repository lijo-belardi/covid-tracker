// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Line } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
// Others import
import apiClient from '../../../../../apiClient'
import requests from '../../../../../apiClient/requests';
import logErrors from '../../../../../utility/consoleShortcuts'


// ChartJs Register
ChartJS.register(Tooltip, CategoryScale, LinearScale, PointElement, Legend, LineElement);

const LineChartAllLast30DaysCases = () => {
    const [cases, setCases] = useState({})
    let dates = Object.keys(cases)
    let casesDateValue = Object.values(cases)

    const data = {
        labels: dates.map(singleDay => singleDay),
        datasets: [
            {
                label: 'Cases',
                backgroundColor: '#1a76d3',
                borderColor: '#1a76d3',
                data: casesDateValue.map(dateValue => dateValue),
            }
        ]
    };

    let options = {
        responsive: true
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get(requests.last30DaysData)
            setCases(response.data.cases)
        } catch (error) {
            logErrors(error)
        }
    }

    return (<Line data={data} style={{ maxHeight: 400 }} options={options} />)
}

export default LineChartAllLast30DaysCases