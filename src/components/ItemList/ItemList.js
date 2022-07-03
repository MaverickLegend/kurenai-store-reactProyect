import React from "react";
import Item from './Item';
import './Item.css'


export default function ItemList({ films }) {
    return (
        <div className="itemsContainer">
            {films.map((filmsInfo) => <Item elem={filmsInfo} /> )}
        </div>
    );
}