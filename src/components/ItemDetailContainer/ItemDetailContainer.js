import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [productID, setProductID] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
            const getProductID = async () =>{
                try {
                    const response = await fetch('https://ghibliapi.herokuapp.com/films/');
                    const data = await response.json();
                    setProductID(data);
                }
                catch (err) {
                    console.log(err)
                }
            }
            getProductID(); 
            console.log(setProductID)
    }, [id]);

    return(
        <ItemDetail singleProduct={productID} />
    )
    
}

export default ItemDetailContainer;