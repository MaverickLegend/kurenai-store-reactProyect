import React, { useState } from 'react'
import './ItemCounter.css'

const ItemCount = ({ stock, initial, compra }) => {

    const [item, setItem] = useState(initial)

    const anadir = () => {
        item < stock && setItem(item+1)
    }

    const quitar = () => {
        item > 1 && setItem(item-1)
    }

    return (
    <div className='ItemAddContainer'>
        <div className='ItemAdd'>
            <div className='ItemSubmit'>
                <button className='buttonAdd buttonStyle' onClick={quitar}>-</button>
                <p>{item}</p>
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
