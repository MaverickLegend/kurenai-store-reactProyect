import React from "react";

const ItemListContainer = ({ greetings }) => {
    return(
        <div>
            <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
            <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
        </div>
    )
}

export default ItemListContainer;