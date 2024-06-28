import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
    const superheroes = ["batman", "superman", "ironman", "flash", "spiderman"]
    return (
        <div className="flex gap-5">
            <div className="flex flex-col h-screen bg-green-300 w-[150px]">
                {superheroes.map((superhero) => (
                    <NavLink key={superhero} to={`/stats/${superhero}`}
                        className={({ isActive }) => `pl-5 py-3 font-semibold text-xl  border-b hover:bg-white ${isActive ? "text-yellow-400 bg-white" : "text-green-700"}`}
                    >
                        {superhero}
                    </NavLink>
                )

                )}
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar;
