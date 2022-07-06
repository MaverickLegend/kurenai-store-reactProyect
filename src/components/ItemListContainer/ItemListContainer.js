import React from "react";
import ItemCount from "../ItemCount";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import KurenaiLoader from '../animations/Loader/loader'

const ItemListContainer = ({ greetings }) => {


    const onAdd = () => {
        alert("Tu compra ha sido realizada con éxito")
    }
    
    const [products, setProducts] = useState([])
    const [loader,Setloader] = useState(false)
    
    useEffect(() => {
            Setloader(true);
            setTimeout(() => { 
                const getFilms = async () =>{
                    try {
                        const response = await fetch('https://ghibliapi.herokuapp.com/films');
                        const data = await response.json()
                        Setloader(false)
                        setProducts(data);
                    }
                    catch (err) {
                        console.log(err)
                    }
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
        <>
            <div className="filtersContainer">
                
            </div>
            <div>
                <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                {/* <ItemCount stock={6} initial={1} compra={onAdd}/> */}
                <ItemList films={products} />
            </div>
        </>
    )
}

export default ItemListContainer;