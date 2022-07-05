import React from "react";
import CartImg from '../img/shopping-cart.png'


const CartWidget = () => {
    return (
        <div>
            <img className="shoping-cart" src={CartImg} alt="carrito" style={{width: '40px', height: '40px'}} />
        </div>
    )
}

export default CartWidget;