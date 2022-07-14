import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;



const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [qtyItems, setQtyItems] = useState(0);    

    const getQtyItems = () => {
        setQtyItems(products)
    }

    useEffect(() => {
        getQtyItems(addItem);
        console.log(products)
    }, [products])


    const addItem = (singleProduct) => {
        if (isInCart(singleProduct.id)){
            const aux = [...products]
            const found = products.find(s => s.id === singleProduct.id)
            found.qty += singleProduct.qty;
            setProducts(aux);
        }
        else{
            setProducts([...products, singleProduct])
        }
    }

    const deleteItem = (id) => {
    };

    const isInCart = (id) => {
        products.some(singleProduct => singleProduct.id === id)
    };

    const clear = () => {
        setProducts([]);
    }
    
    return (
        <Provider value={{ products, addItem, deleteItem, clear, qtyItems }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;


