import { createContext, useState, useEffect } from "react";
import { getProductsAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    productMap: {}
});

export const ProductsProvider = ({ children }) => {
    const [productMap, setProductMap] = useState({});
    const value = { productMap };

    useEffect(() => {
        const getProductMap = async () => {
            const productMap = await getProductsAndDocuments();
            setProductMap(productMap);
        }
        getProductMap();
    }, [])

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
};