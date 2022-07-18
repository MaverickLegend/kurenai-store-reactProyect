import React from "react";
import ItemCount from "../ItemCount";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import KurenaiLoader from '../animations/Loader/loader'

const ItemListContainer = ({ greetings }) => {

    // const onAdd = () => {
    //     alert("Tu compra ha sido realizada con éxito")
    // }
    
    const [products, setProducts] = useState([])
    const [loader,setLoader] = useState(false)
    const { director } = useParams;

    useEffect(() => {
        setLoader(true);
        setTimeout(() => { 
        const URL = director
                    ? `https://ghibliapi.herokuapp.com/films/${director}`
                    : 'https://ghibliapi.herokuapp.com/films/'
            axios
                .get(URL)
                .then((response) => setProducts(response.data))
                .catch((err) => console.log(err))
                .finally(() => setLoader(false));
                
        }, 3000);
    },[director, URL]);
        
        const takahata = products.filter (t=>t.director === 'Isao Takahata');  
        const kondo = products.filter (t=>t.director === 'Yoshifumi Kondō');
        const morita = products.filter (t=>t.director === 'Hiroyuki Morita');    
        const gMiyazaki = products.filter (t=>t.director === 'Gorō Miyazaki');    
        const yonebayashi = products.filter (t=>t.director === 'Hiromasa Yonebayashi');
        const wit = products.filter (t=>t.director === 'Michaël Dudok de Wit');

        const mainFilter = event => {
            switch (event.target.innerText) {
                case 'Isao Takahata':
                    console.log(takahata);
                    break;
                case 'Yoshifumi Kondō':
                    console.log(kondo);
                    break;
                case 'Hiroyuki Morita':
                    console.log(morita);
                    break;
                case 'Gorō Miyazaki':
                    console.log(gMiyazaki);
                    break;
            
                default:
                    break;
            }
        }


        if (loader) {
            return (
                <KurenaiLoader />
            );
        }

    return(
            <div>                
                <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                {/* {products.map((product) => */}
                {/* // <Link key={product.director} to={`/productos/director:${product.director}`}><button className="buttonStyle">{product.director}</button></Link>)} */}

                <div className="filtersContainer">
                    <h3 style={{fontWeight: 'lighter', paddingLeft: '1rem', width:'20%'}}>Filtros:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}> 
                        <button onClick={mainFilter} className="buttonStyle">Isao Takahata</button>
                        <button onClick={mainFilter} className="buttonStyle">Yoshifumi Kondō</button>
                        <button onClick={mainFilter} className="buttonStyle">Hiroyuki Morita</button>
                        <button onClick={mainFilter} className="buttonStyle">Gorō Miyazaki</button>
                        <button className="buttonStyle">Hiromasa Yonebayashi</button>
                        <button className="buttonStyle">Michaël Dudok de Wit</button>
                    </div>
                </div>
                <ItemList films={products} />
                {/* <ItemCount stock={6} initial={1} compra={onAdd}/> */}
            </div>
    )
}

export default ItemListContainer;