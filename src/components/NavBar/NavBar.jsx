import React from "react";
import CartWidget from "../CartWidget";
import logo from '../../img/main-logo.png'
import './NavBar.css';
import {navLink} from "react-router-dom";

const NavBar = () => {

    const categories = [
        {name: "Inicio", id:1, route: "/home"},
        {name: "Productos", id:2, route: "/productos"},
        {name: "Nosotros", id:3, route: "/nosotros"}
    ]

    return(
    <div className="navBar_container">
        <div className="navBar-logo">
            <img src={logo} alt="logo"/>
            <h1>Kurenai Store</h1>
        </div>
        <ul className="links">
            {/* {categories.map((cat) => <navLink key={cat.id} to={cat.route}>{cat.name}</navLink>)} */}
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Nosotros</a></li>
        </ul>
        <div className="button_user">
            <button className="button-item">Log In</button>
            <CartWidget />
        </div>
    </div>
    );
}

export default NavBar;
