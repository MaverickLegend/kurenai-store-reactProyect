import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, compra }) => {

    const [counter, setCounter] = useState(initial)

    const anadir = () => {
        counter < stock && setCounter(counter+1)
    }

    const quitar = () => {
        counter > 1 && setCounter(counter-1)
    }

    return (
    <div className='ItemAddContainer'>
        <div className='ItemAdd'>
            <div className='ItemSubmit'>
                <button className='buttonAdd buttonStyle' onClick={quitar}>-</button>
                <p>{counter}</p>
                <button className='buttonAdd buttonStyle' onClick={anadir}>+</button>
            </div>
            <div>
                <button className='submitAdd buttonStyle' onClick={compra}>Añadir al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemCount
