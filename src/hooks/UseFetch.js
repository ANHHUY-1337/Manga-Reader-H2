import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useFetch(url) {
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    const handleFetchToError = () => {
        navigate ('/notfound')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                if (data?.status === 'error') {
                    handleFetchToError()
                    return
                }
                setData(data)
            } catch (error) {
                console.error(error)
                handleFetchToError()
            }
        }
        fetchData()
    }, [url])
    return [data]
}

export default useFetch
