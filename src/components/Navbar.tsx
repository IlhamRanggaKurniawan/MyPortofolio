import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation()

    console.log(location.pathname)

    return (
        <div className='w-full lg:max-w-[340px] flex items-center justify-center bg-muted rounded-t-lg  lg:rounded-bl-lg lg:rounded-tl-none px-6 py-4 gap-6'>
            <Link className={`${location.pathname === "/" && "text-yellow-500"} md:text-lg md:font-semibold`} to="/">About</Link>
            <Link className={`${location.pathname === "/project" && "text-yellow-500"} md:text-lg md:font-semibold`} to="/project">Project</Link>
            <Link className={`${location.pathname === "/tech" && "text-yellow-500"} md:text-lg md:font-semibold`} to="/tech">Tech Stack</Link>
        </div>
    )
}

export default Navbar