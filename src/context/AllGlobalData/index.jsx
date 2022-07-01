import React, { useState, useEffect, createContext } from "react";
import requests from '../../apiClient/requests'
import apiClient from "../../apiClient";
import logErrors from '../../utility/consoleShortcuts'

export const AllGlobalDataContext = createContext()

export const AllGlobalDataProvider = (props) => {
    const [globalData, setGlobalData] = useState([])
    useEffect(() => {
        getGlobalData()
    }, [])

    const getGlobalData = async () => {
        try {
            const response = await apiClient.get(requests.allGlobalData)
            if (!(Object.entries(response).length === 0)) {
                setGlobalData(response.data)
            }
        } catch (error) {
            logErrors(error)
        } 
    }
    return (
        <AllGlobalDataContext.Provider value={[globalData, setGlobalData]}>
            {props.children}
        </AllGlobalDataContext.Provider>
    )
}