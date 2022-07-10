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
    
    // const [productsFilter, setproductsFilter] =useState([])
    const [products, setProducts] = useState([])
    const [loader,setLoader] = useState(false)

    useEffect(() => {
            setLoader(true);
            setTimeout(() => { 
                const getProducts = async () =>{
                    try {
                        const response = await fetch('https://ghibliapi.herokuapp.com/films/');
                        const data = await response.json()
                        setProducts(data);                       
                    }
                    catch (err) {
                        console.log(err)
                    }
                    finally{setLoader(false)}
                }           
                getProducts();
            }, 3000);
        }, []);
        

        // ------------------- probar acá ----------------- //


        const miyazaki = products.filter (t=>t.director === 'Hayao Miyazaki');
        const hmiyazakiFilter = () => {
            setProducts(miyazaki)
        }

        // ------------------------------------------------- //

    
        const takahata = products.filter (t=>t.director === 'Isao Takahata');  
        const kondo = products.filter (t=>t.director === 'Yoshifumi Kondō');  
        const morita = products.filter (t=>t.director === 'Hiroyuki Morita');    
        const gMiyazaki = products.filter (t=>t.director === 'Gorō Miyazaki');    
        const yonebayashi = products.filter (t=>t.director === 'Hiromasa Yonebayashi');
        const wit = products.filter (t=>t.director === 'Michaël Dudok de Wit');

        const takahataFilter = () => {
            setProducts(takahata)
        }
        const kondoFilter = () => {
            setProducts(kondo)
        }
        const moritaFilter = () => {
            setProducts(morita)
        }
        const gmiyazakiFilter = () => {
            setProducts(gMiyazaki)
        }
        const yonebayashiFilter = () => {
            setProducts(yonebayashi)
        }
        const witFilter = () => {
            setProducts(wit)
        }

        if (loader) {
            return (
                <KurenaiLoader />
            );
        }

    return(
            <div>                
                {/* <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1> */}
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                <div className="filtersContainer">
                    <h3 style={{fontWeight: 'lighter', paddingLeft: '1rem', width:'20%'}}>Filtros:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
                        <button onClick={hmiyazakiFilter} className="buttonStyle">Hayao Miyazaki</button>
                        <button onClick={takahataFilter} className="buttonStyle">Isao Takahata</button>
                        <button onClick={kondoFilter}  className="buttonStyle">Yoshifumi Kondō</button>
                        <button onClick={moritaFilter}  className="buttonStyle">Hiroyuki Morita</button>
                        <button onClick={gmiyazakiFilter}  className="buttonStyle">Gorō Miyazaki</button>
                        <button onClick={yonebayashiFilter}  className="buttonStyle">Hiromasa Yonebayashi</button>
                        <button onClick={witFilter}  className="buttonStyle">Michaël Dudok de Wit</button>
                    </div>
                </div>
                <ItemList films={products} />
                {/* <ItemCount stock={6} initial={1} compra={onAdd}/> */}
            </div>
    )
}

export default ItemListContainer;