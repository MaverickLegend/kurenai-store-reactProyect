import React from "react";
import CartWidget from "../CartWidget";
import logo from '../../img/main-logo.png'
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

    const categories = [
        {name: "Inicio", id:1, route: "/"},
        {name: "Productos", id:2, route: "/productos"},
        {name: "Nosotros", id:3, route: "/nosotros"}
    ]

    return(
    <div className="navBar_container">
        <div className="navBar-logo">
            <Link to="/"><img className= "navbarImg" src={logo} alt="logo"/></Link>
            <h1 className="navbarTitle">Kurenai Store</h1>
        </div>
        <ul className="links">
            {categories.map((cat) => <NavLink className={"linksRoute"} key={cat.id} to={cat.route}>{cat.name}</NavLink>)}
        </ul>
        <div className="button_user">
            <button className="button-item">Log In</button>
            <Link to="/carrito"><CartWidget /></Link>
        </div>
    </div>
    );
}

export default NavBar;
