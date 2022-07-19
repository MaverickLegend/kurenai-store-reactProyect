import React from "react"
import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";
import './Cart.css'

const Cart = () => {
    const { products, deleteItem, clear, qtyItems } = useContext(cartContext);

    return(
        <>
            <div className="cartContainer" >
                <h1>Carrito de compras</h1>
                <div className="itemsCartContainer">
                    <div className="detailContainerLeft">
                        <p style={{borderBottom: 'solid pink 1px', paddingBottom:'1rem'}}>Items</p>
                        {products.map((cartProducts) => <p>{cartProducts.title}</p>)}
                    </div>
                    <div className="detailContainerRight">
                        <p style={{borderBottom: 'solid pink 1px', paddingBottom:'1rem'}}>{qtyItems}</p>
                        {products.map((cartProducts) => <p>{cartProducts.qty}</p>)}
                    </div>
                </div>
                <button style={{width: '20rem', display: 'flex', alignSelf: 'center', justifyContent:'center', marginBottom: '5rem'}} 
                className="buttonStyle">Vaciar Carrito{clear}</button>
            </div>
        </>
    )
}

export default Cart