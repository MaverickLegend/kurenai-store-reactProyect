import React from "react";
import Item from './Item';
import './Item.css'

const ItemList = ({ products }) => {

    return (
            <div className="itemsContainer">
                {products.map((product) => <Item key={product.id} elem={product} /> )}
            </div>
    );
}

export default ItemList;