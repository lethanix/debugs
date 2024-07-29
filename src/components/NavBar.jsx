import CartWidget from "./CartWidget.jsx";
import {Link, NavLink, Outlet} from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="w-5/6 mx-auto bg-ctp-crust rounded-md p-2 flex flex-row flex-wrap space-x-4 m-6">
                <Link to="/" className="text-wide-black">DEBUGS</Link>
                <ul className="flex grow items-stretch space-x-4">
                    <li><NavLink to="/category/tablets" className={({isActive}) => {
                        return isActive ? "text-ctp-green" : "text-ctp-blue"
                    }}>Tablets</NavLink></li>
                    <li><NavLink to="/category/smartphones" className={({isActive}) => {
                        return isActive ? "text-ctp-green" : "text-ctp-blue"
                    }}>Smartphones</NavLink></li>
                    <li><NavLink to="/category/laptops" className={({isActive}) => {
                        return isActive ? "text-ctp-green" : "text-ctp-blue"
                    }}>Laptops</NavLink></li>
                </ul>
                <CartWidget className="text-right shrink"/>
            </div>
            <div className="w-5/6 mx-auto">
                <Outlet/>
            </div>
        </>
    )
}

export default NavBar;