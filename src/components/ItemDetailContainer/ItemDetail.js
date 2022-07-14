import React from "react";
import '../ItemCount.css'
import './itemDetail.css'
import ItemCount from '../ItemCount.jsx'
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({singleProduct}) => {

    const [buyFinalized, setBuyFinalized] = useState(false)

    const onAdd = () => {
        setBuyFinalized(true);
    }

    return(
        <div className="itemDetailContainer">
            <div className="singleProduct">
                <div className="singleDescriptionContainer">
                    <h1 className="singleTitle">{singleProduct.title}</h1>
                    <p className="singleText">{singleProduct.original_title_romanised}</p>
                    <p className="singleText">{singleProduct.description}</p>
                </div>
                <div className="singleImgContainer">
                    <img className="singleBanner" src={singleProduct.movie_banner} />
                </div>
            </div>
            <div>
                {buyFinalized
                ? <Link to="/cart"><button style={{width:'300px', margin:'10px'}} className="buttonStyle">Finalizar compra</button></Link>
                :<ItemCount stock={4} initial={1} onAdd={onAdd}/>}                
            </div>
        </div>
    )
}

export default ItemDetail;