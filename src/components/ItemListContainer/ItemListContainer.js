import React from "react";
import ItemCount from "../ItemCount";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import KurenaiLoader from '../animations/Loader/loader'
import {useParams} from "react-router-dom";

const ItemListContainer = ({ greetings }) => {


    // const onAdd = () => {
    //     alert("Tu compra ha sido realizada con éxito")
    // }
    
    const [products, setProducts] = useState([])
    const [loader,setLoader] = useState(false)
    const { producer }= useParams();

    useEffect(() => {
            setLoader(true);
            setTimeout(() => { 
                const getFilms = async () =>{
                    try {
                        const response = await fetch('https://ghibliapi.herokuapp.com/films');
                        const data = await response.json()
                        setProducts(data);
                    }
                    catch (err) {
                        console.log(err)
                    }
                    finally{setLoader(false)}
                }
                getFilms();
            }, 3000);
        }, []);
        

        if (loader) {
            return (
                <KurenaiLoader />
            );
        }
    
    return(
            <div>                
                <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                <div className="filtersContainer">
                    <h3 style={{fontWeight: 'lighter', paddingLeft: '1rem', width:'20%'}}>Filtros:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
                        <button className="buttonStyle">asdjkasnkd</button>
                        <button className="buttonStyle">asdmasd</button>
                        <button className="buttonStyle">iurnroh</button>
                        {/* {products.map((producerFilter) => <button className="buttonStyle">{producerFilter.producer}</button>)} */}
                    </div>
                </div>
                <ItemList films={products} />
                {/* <ItemCount stock={6} initial={1} compra={onAdd}/> */}
            </div>
    )
}

export default ItemListContainer;