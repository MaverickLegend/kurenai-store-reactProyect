import React from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../contexts/CartContext";
import './Cart.css'

const Cart = () => {
    const { products, deleteItem, clear, qtyItems } = useContext(cartContext);

    return(
        <>
            <div className="cartContainer" >
                {qtyItems === 0
                    ?
                    <>
                        <h1 style={{fontWeight: 'lighter', letterSpacing:'5px'}}>Su carrito está vacío</h1>
                        <Link to={'/productos'}><button style={{marginBottom:'2rem'}} className="buttonStyle">Ir a comprar</button></Link>
                    </>
                    :<>
                        <h1 style={{fontWeight: 'lighter', letterSpacing:'5px'}}>CARRITO DE COMPRAS</h1>
                        <div className="itemsCartContainer">
                            <div className="itemsTopContainer">
                                <h3 style={{paddingLeft:'2rem', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}} className='totalItemsText'>Total de items:</h3>
                                <h3 style={{borderTopRightRadius: '5px', borderBottomRightRadius:'5px'}} className="totalItemsText">{qtyItems}</h3>    
                            </div>
                            <div className="detailContainerLeft">
                                {products.map((cartProducts) => <p style={{borderBottom: 'solid pink 1px'}}>{cartProducts.title}</p>)}
                            </div>
                            <div className="detailContainerMiddle">
                                {products.map((cartProducts) => <p style={{borderBottom: 'solid pink 1px', width:'100%'}}>{cartProducts.qty}</p>)} 
                            </div>
                            <div className="detailContainerRight">
                                {products.map((cartProducts) => <button onClick={deleteItem} className="buttonStyle">Eliminar {cartProducts.qty} items</button>)}
                            </div>
                            <div className="containerBottom">
                                <button onClick={clear} style={{width: '20rem', display: 'flex', alignSelf: 'center', justifyContent:'center', marginBottom: '5rem'}} 
                                className="buttonStyle">Vaciar Carrito</button>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Cart