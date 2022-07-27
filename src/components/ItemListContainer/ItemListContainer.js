import React from "react";
import ItemList from "./ItemList"
import { useEffect, useState} from "react";
import KurenaiLoader from '../animations/Loader/loader'
import { db } from '../../firebase/firebase'
import { getDocs, collection } from "firebase/firestore"

const ItemListContainer = ({greetings}) => {
    
    const [products, setProducts] = useState([])
    const [loader,setLoader] = useState(true)

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        getDocs(productsCollection)
        .then(result =>{
            const lista = result.docs.map(doc =>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setProducts(lista);
        })
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    }, []);

    const [filterDone, setFilterDone] = useState(false)
    const [category, setCategory] = useState()
    const todos = () => {setCategory(products)}
    const poleras = products.filter (t=>t.category === 'Poleras')
    const totebags = products.filter (t=>t.category === 'Totebags')
    const polerones = products.filter (t=>t.category === 'Polerones')
    const mainFilter = event => {
            switch (event.target.innerText) {
                case 'Poleras':
                    setCategory(poleras);
                    setFilterDone(true)
                    break;
                case 'Totebags':
                    setCategory(totebags);
                    setFilterDone(true)
                    break;
                case 'Polerones':
                    setCategory(polerones)
                    setFilterDone(true)
                    break;
            }}

    return(
            <div>                
                <h1 style={{fontWeight:'lighter', backgroundColor: 'darkred'}}>{ greetings }</h1>
                <p>Somos Kurenai Store, tienda especializada en llevar las mejores ilustraciones y diseños de manga, animé, rock y metal a poleras de gran calidad.</p>   
                <div className="filtersContainer">
                    <h3 style={{fontWeight: 'lighter', paddingLeft: '1rem', width:'20%'}}>Filtro por categoría:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
                        <button onClick={todos} className="buttonStyle">Todos</button>
                        <button onClick={mainFilter} className="buttonStyle">Poleras</button>
                        <button onClick={mainFilter} className="buttonStyle">Polerones</button>
                        <button onClick={mainFilter} className="buttonStyle">Totebags</button>
                    </div>
                </div>
                {filterDone 
                ? <ItemList products={category}/>
                : <ItemList products={products}/>}
                {/* {loader ? <KurenaiLoader /> : <ItemList products={products} />} */}
            </div>
    )
}

export default ItemListContainer;