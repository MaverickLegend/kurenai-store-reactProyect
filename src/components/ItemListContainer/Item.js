import React from "react";
import './Item.css'
import { Link } from "react-router-dom";


const Item = ({elem}) =>  {

    return (
        <div className="itemBox">
            <h1 style={{height: '3rem'}} className="itemBoxText">{elem.title}</h1>
            <p style={{height: '5rem'}}className="itemBoxText">{elem.description}</p>
            <img className="imgDesignContainer" src={elem.designImg}/>
            <img className="imgProductContainer" src={elem.image}/>
            <p style={{height: '5rem'}}className="itemBoxText">Valor: ${elem.price}</p>
            <Link to={`/productos/${elem.id}`}>
                <button className="buttonStyle">Más información</button>
            </Link>
        </div>
    );
}

export default Item;