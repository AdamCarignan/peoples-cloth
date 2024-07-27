import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    setIsCartOpen: () => {},
    isCartOpen: false
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen }; 

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
} 