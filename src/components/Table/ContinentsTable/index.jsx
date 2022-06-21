// React
import React, { useState, useEffect } from 'react'
// Others import
import apiClient from '../../../apiClient'

const ContinentsTable = () => {
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

    return (
        <div> {/* TODO vedere MUI Material per migliorare la tabella */}
            <table>
                <tbody>
                    {continentsData?.map((continent) => {
                        return (
                            <tr key={continent.continent}>
                                <td>{continent.continent}</td> {/* TODO aggiungere i Link */}
                                <td>{continent.deaths}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ContinentsTable