import CartWidget from "./CartWidget.jsx";

function NavBar() {
    return (
        <>
            <h3>Debug Shop</h3>
            <ul>
                <li><a href="">Stickers</a></li>
                <li><a href="">Shirts</a></li>
                <li><a href="">Accessories</a></li>
            </ul>
            <CartWidget/>
        </>
    )
}

export default NavBar;