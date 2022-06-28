import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greetings }) => {
    const onAdd = () => {
        alert("Tu compra ha sido realizada con éxito")
    }
    return(
        <div>
            <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
            <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
            <ItemCount stock={6} initial={1} compra={onAdd}/>
        </div>
    )
}

export default ItemListContainer;