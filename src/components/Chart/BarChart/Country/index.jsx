// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Bar } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// Others import
import apiClient from '../../../../apiClient'
import requests from '../../../../apiClient/requests'
import logErrors from '../../../../utility/consoleShortcuts'

// ChartJs Register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const BarChartCountry = ({ cases, deaths, recovered }) => {
    // BarChart - data's configuration
    let data = {
        datasets: [{
            label: 'Cases',
            backgroundColor: '#1a76d3',
            // data --> numbers of cases 
            data: { cases },
            borderWidth: 1
        },
        {
            label: 'Deaths',
            backgroundColor: 'rgb(255, 99, 132)',
            // data --> numbers of deaths 
            data: { deaths },
            borderWidth: 1
        },
        {
            label: 'Recovered',
            backgroundColor: 'rgb(129, 199, 132, 0.8)',
            // data --> numbers of recovered 
            data: { recovered },
            borderWidth: 1
        }
    ]
    }

    // BarChart - options's configuration
    let options = {
        responsive: true,
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


    return (<Bar data={data} style={{ maxHeight: 700 }} options={options} />)
}

export default BarChartCountry