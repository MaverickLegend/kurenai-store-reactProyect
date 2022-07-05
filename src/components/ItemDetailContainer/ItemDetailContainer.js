import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [productID, setProductID] = useState([])
    
    useEffect(() => {
            const getProductID = async () =>{
                try {
                    const response = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
                    const data = await response.json();
                    setProductID(data);
                }
                catch (err) {
                    console.log(err)
                }
            }
            getProductID();          
    }, []);

    return(
        <ItemDetail singleProduct={productID} />
    )
    
}

export default ItemDetailContainer;