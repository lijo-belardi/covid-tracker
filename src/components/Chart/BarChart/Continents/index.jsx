import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import apiClient from '../../../../apiClient'

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale
)

/* TODO risolvere problema "undefined" */
const ContinentsBarChart = () => {
    const [continentsData, setContinentsData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get('/v3/covid-19/continents')
            setContinentsData(response.data)
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }

    // BarChart - data's configuration
    let data = {
        // labels --> continents's name
        labels: continentsData?.map(continent => continent.continent),
        datasets: [{
            label: 'Continents',
            backgroundColor: '#AE3813',
            // data --> numbers of cases 
            data: continentsData?.map(continent => continent.cases),
            borderWidth: 1
        }]
    }

    // BarChart - options's configuration
    let options = {
        //responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legends: {
            labels: {
                fontSize: 36
            }
        }
    }
    return (<Bar data={data} style={{ maxHeight: 400 }} options={options} />)
}

export default ContinentsBarChart