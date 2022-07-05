import React from "react";
import './itemDetail.css'

const ItemDetail = ({singleProduct}) => {
    return(
        <div className="itemDetail">
            <div>
                <h1 className="singleText">{singleProduct.title}</h1>
                <p className="singleText">{singleProduct.description}</p>
            </div>
            <img className="singleBanner" src={singleProduct.movie_banner} />
        </div>
    )
}

export default ItemDetail;