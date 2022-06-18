import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null)  // data
    const [loading, setLoading] = useState(false) // data - still loading
    const [error, setError] = useState(null) // data - errors

    useEffect(() => {
        getData()
    }, [url])

    const getData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }



    return { data, loading, error }

}

export default useFetch