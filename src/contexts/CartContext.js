import { createContext, useState, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [qtyItems, setQtyItems] = useState(0);  

    const getQtyItems = () => {
        let qty = 0;
        products.forEach(singleProduct => qty += singleProduct.qty )
        setQtyItems(qty)
    }

    useEffect(() => {
        getQtyItems();
    }, [products])


    const addItem = (singleProduct) => {
        if (isInCart(singleProduct.id)){
            const found = products.find(s => s.id === singleProduct.id)
            const index = products.indexOf(found);
            const aux = [...products]
            found.qty += singleProduct.qty;
            aux[index].qty += singleProduct.qty;
            setProducts(aux);
        }
        else{
            setProducts([...products, singleProduct])
        }
    }

    const deleteItem = () => {
        const founded = products.find(p => p.id !== products.id)
        const deleted = [...products]
        console.log(founded)
        console.log(founded.qty)
    }

    const isInCart = (id) => {
        return products.some(singleProduct => singleProduct.id === id)
    };

    const clear = () => {
        setProducts([]);
        setQtyItems(0);
    }
    
    return (
        <Provider value={{ products, addItem, deleteItem, clear, qtyItems }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;


