import './Cart.css'
import React from "react"
import { useContext, useState } from "react";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'


const Cart = () => {
    const { products, deleteItem, clear, qtyItems, sumaTotal } = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("")

    // const datosComprador = () => {
    //     FORMULARIO POR REALIZAR
    // }

    // const finalizarCompra = () => {
    //     const ventasCollection = collection(db, 'ventas');
    //     addDoc(ventasCollection, {
    //         datosComprador,
    //         items: products,
    //         date: serverTimestamp(),
    //         total: 500
    //     })
    //     .then((result) =>{
    //     setIdVenta(result.id)
    //     })
    //     const updateCollection = doc(db, "productos","S5K3OHXUmjlcye7tzKef");
    //     updateDoc(updateCollection,{stock:10})
    // }

        
    return(
        <>
            <div className="cartContainer" >
                {qtyItems === 0
                    ?<>
                        <h1 style={{fontWeight: 'lighter', letterSpacing:'5px'}}>Su carrito está vacío</h1>
                        <Link to={'/productos'}><button style={{marginBottom:'2rem'}} className="buttonStyle">Ir a comprar</button></Link>
                    </>
                    :<>
                        <h1 style={{fontWeight: 'lighter', letterSpacing:'5px'}}>CARRITO DE COMPRAS</h1>
                        <div className="itemsCartContainer">
                            <div className="itemsTopContainer">
                                <h3 style={{paddingLeft:'2rem', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}} className='totalItemsText'>Total de items:</h3>
                                <h3 style={{borderTopRightRadius: '5px', borderBottomRightRadius:'5px'}} className="totalItemsText">{qtyItems}</h3>
                                <h1>{sumaTotal}</h1>
                            </div>
                            <div className="detailContainerLeft">
                                {products.map((cartProducts) => <p style={{borderBottom: 'solid pink 1px'}}>{cartProducts.title}</p>)}
                            </div>
                            <div className="detailContainerMiddle">
                                {products.map((cartProducts) => <p style={{borderBottom: 'solid pink 1px', width:'100%'}}>{cartProducts.qty} x </p>)} 
                            </div>
                            <div className="detailContainerRight">
                                {products.map((cartProducts) => <p style={{borderBottom: 'solid pink 1px', width:'100%'}}>{cartProducts.price}</p>)}
                                {/* {products.map((cartProducts) => <button onClick={deleteItem} className="buttonStyle">Eliminar {cartProducts.qty} items</button>)} */}
                            </div>
                            <div className="containerBottom">
                                <button onClick={clear} style={{width: '20rem', display: 'flex', alignSelf: 'center', justifyContent:'center', marginBottom: '5rem'}} 
                                className="buttonStyle">Vaciar Carrito</button>
                                {/* <button onClick={finalizarCompra} style={{width: '20rem', display: 'flex', alignSelf: 'center', justifyContent:'center', marginBottom: '5rem'}} 
                                className="buttonStyle">Finalizar Compra</button> */}
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Cart