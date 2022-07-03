import React from "react";
import './Item.css'

export default function Item({ elem }) {

    return (
        <div className="itemBox">
            <p>Nombre: {elem.title}</p>
            <p>Título Original: {elem.original_title_romanised}</p>
            <p>Año: {elem.release_date}</p>
            <img className="imgContainer" src={elem.image}/>
            <button className="buttonStyle">Más información</button>
        </div>
    );
}