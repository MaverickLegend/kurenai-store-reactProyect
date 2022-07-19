import React from "react";
import './Item.css'
import { Link } from "react-router-dom";


const Item = ({elem}) =>  {

    return (
        <div className="itemBox">
            <h1 style={{height: '5rem'}} className="itemBoxText">Nombre: {elem.title}</h1>
            <p style={{height: '5rem'}}className="itemBoxText">Título Original: {elem.original_title_romanised}</p>
            {/* {/* <p className="itemBoxText">Año: {elem.release_date}</p> */}
            <img className="imgContainer" src={elem.image}/>
            <Link to={`/productos/${elem.id}`}>
                <button className="buttonStyle">Más información</button>
            </Link>
        </div>
    );
}

export default Item;