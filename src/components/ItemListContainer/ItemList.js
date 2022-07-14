import React from "react";
import Item from './Item';
import './Item.css'

const ItemList = ({ films }) => {

    return (
            <div className="itemsContainer">
                {films.map((filmsInfo) => <Item key={films.id} elem={filmsInfo} /> )}
            </div>
    );
}

export default ItemList;