import React from "react";
import CartImg from '../img/shopping-cart.png'
import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";


const CartWidget = () => {
    const { qtyItems } = useContext(cartContext);
    return (
        <div style={{display: "flex", justifyContent:"space-evenly", alignItems:"center", width: "15rem"}}>
            <img className="shoping-cart" src={CartImg} alt="carrito" style={{width: '40px', height: '40px'}} />
            <p style={{color:"aliceblue"}}>{qtyItems}</p>
        </div>
    )
}

export default CartWidget;