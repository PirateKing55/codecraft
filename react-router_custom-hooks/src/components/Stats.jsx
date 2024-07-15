import useFetchData from "../hooks/useFetchData"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Stats = () => {

    // const [darkMode, setDarkMode] = useState(() => {
    //     return localStorage.getItem('theme') === 'dark';
    // });

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.setItem('theme', 'light');
    //     }
    // }, [darkMode]);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    const params = useParams()

    const { data, loading, error } = useFetchData(params.heroname)
    console.log(data)


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1 className="text-red-600">Something went wrong!</h1>

    return (
        data && (
            <ul className="pt-3 dark:bg-gray-500">
                {Object.entries(data).map(([stat, value]) => (
                    <li key={stat} className="text-xl">
                        <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
                    </li>
                ))}
                {/* <button onClick={toggleDarkMode}>toggle</button> */}

            </ul>

        )
    );

}

export default Stats


