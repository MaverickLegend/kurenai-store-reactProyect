import React from "react";
import './itemDetail.css'
import ItemCount from '../ItemCount.jsx'

const ItemDetail = ({singleProduct}) => {
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
                <div className="itemAdd">
                    <ItemCount stock={4} initial={1}/>
                </div>        
        </div>
    )
}

export default ItemDetail;