import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="font-bold text-3xl text-red-600">Page not found!</h1>
            <Link className="text-green-300 text-xl font-semibold underline" to={"/"}>Go back</Link>
        </div>
    )
}

export default NotFoundPage