import React from "react";
import CartWidget from "../CartWidget";
import logo from '../../img/main-logo.png'
import './NavBar.css';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartContext";

const NavBar = () => {
    const { qtyItems } = useContext(cartContext);

    return(
    <div className="navBar_container">
        <div className="navBar-logo">
            <Link to="/"><img className= "navbarImg" src={logo} alt="logo"/></Link>
            <h1 className="navbarTitle">Kurenai Store</h1>
        </div>
        <ul className="links">
            <Link to="/"> <h1 className={"linksRoute"}>Inicio</h1></Link>
            <Link to="/productos"><h1 className="linksRoute">Productos</h1></Link>
            <Link to="/nosotros"><h1 className="linksRoute">Nosotros</h1></Link>
        </ul>
        <div className="button_user">
            {qtyItems === 0
            ? <button className="button-item">Log In</button>
            :<>
                <button className="button-item">Log In</button>
                <Link to="/cart"><CartWidget /></Link>            
            </>}
        </div>
    </div>
    );
}

export default NavBar;
