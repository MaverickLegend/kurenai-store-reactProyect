import React from "react";
import './style.css'

const NavBar = () => {
    return(
    <div className="navBar_container">
        <div className="navBar-logo">
            <img src="" alt="" />
            <h1>Kurenai Store</h1>
        </div>
        <ul className="links">
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Nosotros</a></li>
        </ul>
        <div className="button_user">
            <button className="button-item">Log In</button>
            <button className="button-item">Carrito</button>
        </div>
    </div>
    );
}

export default NavBar;
