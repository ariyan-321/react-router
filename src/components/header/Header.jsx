import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" flex flex-wrap text-center justify-between mx-[50px] items-center  py-7 shadow-x;">
        <h1 className="text-3xl font-bold cursor-pointer">Navbar</h1>
        <nav className="flex gap-7 text-xl cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>

        </nav>
    </div>
  )
}
