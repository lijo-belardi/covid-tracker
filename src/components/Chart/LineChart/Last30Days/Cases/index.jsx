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

const LineChartAllLast30DaysCases = () => {
    const [cases, setCases] = useState({})
    let date = Object.keys(cases)
    let casesDateValue = Object.values(cases)

    const data = {
        labels: date.map(singleDay => singleDay),
        datasets: [
            {
                label: 'Cases',
                backgroundColor: '#AE3813',
                borderColor: '#AE3813',
                data: casesDateValue.map(dateValue => dateValue),
            }
        ]
    };

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get('/v3/covid-19/historical/all?lastdays=30')
            setCases(response.data.cases)
        } catch (error) {
            logErrors(error)
        }
    }

    return (<Line data={data} style={{ maxHeight: 400 }} />)
}

export default LineChartAllLast30DaysCases