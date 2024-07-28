import CartWidget from "./CartWidget.jsx";

function NavBar() {
    return (
        <div className="w-5/6 mx-auto bg-ctp-crust rounded-md p-2 flex flex-row flex-wrap space-x-4">
            <h3 className="text-wide-black">DEBUGS</h3>
            <ul className="flex grow items-stretch space-x-4">
                <li><a href="" className="text-ctp-blue">Stickers</a></li>
                <li><a href="" className="text-ctp-blue">Shirts</a></li>
                <li><a href="" className="text-ctp-blue">Accessories</a></li>
            </ul>
            <CartWidget className="text-right shrink"/>
        </div>
    )
}

export default NavBar;