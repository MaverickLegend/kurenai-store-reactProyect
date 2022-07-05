import React from "react";
import './Item.css'


const Item = ({elem}) =>  {

    return (
        <div className="itemBox">
            <h1 className="itemBoxText">Nombre: {elem.title}</h1>
            {/* <p className="itemBoxText">Título Original: {elem.original_title_romanised}</p> */}
            <p className="itemBoxText">Año: {elem.release_date}</p>
            <img className="imgContainer" src={elem.image}/>
            <button className="buttonStyle">Más información</button>
        </div>
    );
}

export default Item;