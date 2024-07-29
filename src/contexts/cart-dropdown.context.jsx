import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
};

export const removeCheckoutItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    removeItemFromCheckout: () => { },
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const removeItemFromCheckout = (product) => {
        setCartItems(removeCheckoutItem(cartItems, product))
    }

    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    }, [cartItems]);

    useEffect(() => {
        setCartTotal(cartItems.reduce((total, item) => total + item.quantity * item.price, 0));
    }, [cartItems]);

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeItemFromCheckout, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
