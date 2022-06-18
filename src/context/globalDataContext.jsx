import React, { createContext } from 'react'
import requests from '../api/requests'
import useFetch from '../hooks/useFetch'

export const GlobalDataContext = createContext()

export const GlobalDataProvider = (props) => {
    const { data, loading, error } = useFetch(requests.allGlobalData)

    if (loading) return <h1>Loading...</h1>
    if (error) return console.log(error);

    return (
        <GlobalDataContext.Provider value={{ data, loading, error }}>
            {props.children}
        </GlobalDataContext.Provider>
    )
}

export default GlobalDataProvider