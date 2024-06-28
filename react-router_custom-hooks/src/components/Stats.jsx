import useFetchData from "../hooks/useFetchData"
import { useParams } from "react-router-dom"

const Stats = () => {

    const params = useParams()

    const { data, loading, error } = useFetchData(params.heroname)
    console.log(data)


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1 className="text-red-600">Something went wrong!</h1>

    return (
        data && (
            <ul className="pt-3">
                {Object.entries(data).map(([stat, value]) => (
                    <li key={stat} className="text-xl">
                        <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
                    </li>
                ))}
            </ul>
        )
    );

}

export default Stats


