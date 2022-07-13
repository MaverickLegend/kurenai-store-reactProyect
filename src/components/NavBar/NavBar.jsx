import React from "react";
import CartWidget from "../CartWidget";
import logo from '../../img/main-logo.png'
import './NavBar.css';
import {Link} from "react-router-dom";

const NavBar = () => {

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
            <button className="button-item">Log In</button>
            <Link to="/carrito"><CartWidget /></Link>
        </div>
    </div>
    );
}

export default NavBar;
