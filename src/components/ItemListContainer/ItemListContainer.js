import React from "react";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import axios from "axios";
import KurenaiLoader from '../animations/Loader/loader'

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loader,setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        setTimeout(() => { 
        const URL = 'https://ghibliapi.herokuapp.com/films/'
            axios
                .get(URL)
                .then((response) => setProducts(response.data))
                .catch((err) => console.log(err))
                .finally(() => setLoader(false));
                
        }, 3000);
    },[]);
        
    const miyazaki = products.filter (t=>t.director === 'Hayao Miyazaki')
    const takahata = products.filter (t=>t.director === 'Isao Takahata');  
    const kondo = products.filter (t=>t.director === 'Yoshifumi Kondō');
    const morita = products.filter (t=>t.director === 'Hiroyuki Morita');    
    const gMiyazaki = products.filter (t=>t.director === 'Gorō Miyazaki');    
    const yonebayashi = products.filter (t=>t.director === 'Hiromasa Yonebayashi');
    const wit = products.filter (t=>t.director === 'Michaël Dudok de Wit');
    const [filterDone, setFilterDone] = useState(false)
    const [authors, setAuthors] = useState()
    const todes = () => {setAuthors(products)}
    const mainFilter = event => {
        switch (event.target.innerText) {
            case 'Hayao Miyazaki':
                setAuthors(miyazaki);
                setFilterDone(true)
                break;
            case 'Isao Takahata':
                setAuthors(takahata);
                setFilterDone(true)
                break;
            case 'Yoshifumi Kondō':
                setAuthors(kondo)
                setFilterDone(true)
                break;
            case 'Hiroyuki Morita':
                setAuthors(morita);
                setFilterDone(true)
                break;
            case 'Gorō Miyazaki':
                setAuthors(gMiyazaki);
                setFilterDone(true)
                break;
            case 'Hiromasa Yonebayashi':
                setAuthors(yonebayashi);
                setFilterDone(true)
                break;
            case 'Michaël Dudok de Wit':
                setAuthors(wit);
                setFilterDone(true)
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
                {/* <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1> */}
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                <div className="filtersContainer">
                    <h3 style={{fontWeight: 'lighter', paddingLeft: '1rem', width:'20%'}}>Filtros por director:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
                        <button onClick={todes} className="buttonStyle">Tod@s</button>
                        <button onClick={mainFilter} className="buttonStyle">Hayao Miyazaki</button>
                        <button onClick={mainFilter} className="buttonStyle">Isao Takahata</button>
                        <button onClick={mainFilter} className="buttonStyle">Yoshifumi Kondō</button>
                        <button onClick={mainFilter} className="buttonStyle">Hiroyuki Morita</button>
                        <button onClick={mainFilter} className="buttonStyle">Gorō Miyazaki</button>
                        <button onClick={mainFilter} className="buttonStyle">Hiromasa Yonebayashi</button>
                        <button onClick={mainFilter} className="buttonStyle">Michaël Dudok de Wit</button>
                    </div>
                </div>
                {filterDone 
                ? <ItemList films={authors}/>
                : <ItemList films={products}/>}
            </div>
    )
}

export default ItemListContainer;