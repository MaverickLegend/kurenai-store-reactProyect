import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const añadir = () => {
        counter < stock && setCounter(counter+1)
    }

    const quitar = () => {
        counter > 1 && setCounter(counter-1)
    }

    const compra = () => {
        onAdd(counter);
    }

    console.log(compra)

    return (
    <div className='ItemAddContainer'>
        <div className='ItemAdd'>
            <div className='ItemSubmit'>
                <button className='buttonAdd buttonStyle' onClick={quitar}>-</button>
                <p>{counter}</p>
                <button className='buttonAdd buttonStyle' onClick={añadir}>+</button>
            </div>
            <div>
                <button className='submitAdd buttonStyle' onClick={compra}>Añadir al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemCount
