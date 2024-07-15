import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const superheroes = ["batman", "superman", "ironman", "flash", "spiderman"]

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className="flex gap-5">
            <div className="flex flex-col h-screen dark:bg-orange-500 bg-green-300 w-[150px]">
                {superheroes.map((superhero) => (
                    <NavLink key={superhero} to={`/stats/${superhero}`}
                        className={({ isActive }) => `pl-5 py-3 font-semibold text-xl  border-b hover:bg-white ${isActive ? "text-yellow-400 bg-white" : "text-green-700"}`}
                    >
                        {superhero}
                    </NavLink>
                )

                )}
                <button onClick={toggleDarkMode}>toggle</button>

            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar;
