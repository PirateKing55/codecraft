import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = (name) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const TOKEN = "1f70b8d7a4d9c9e8630ddd81ae01079f"
    const BASE_URL = "https://cors-proxy-superhero-api.onrender.com"

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(false)
                const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`)
                setData(response.data.results[0].powerstats)
                console.log(response.data)
            } catch (error) {
                console.log(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [name])

    return { data, loading, error }

}

export default useFetchData;