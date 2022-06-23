// React
import React, { useState, useEffect } from 'react'
// Other import
import apiClient from '../../apiClient'
import logErrors from '../../utility/consoleShortcuts'

const useApiClient = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData()
    }, [url])

    const getData = async () => {
        try {
            setLoading(true)
            const response = await apiClient(url)
            setData(response.data)
        } catch (error) {
            logErrors(error)
        } finally {
            setLoading(false)
        }
    }
    return { data, loading, error }
}

export default useApiClient