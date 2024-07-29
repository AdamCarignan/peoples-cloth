import { CartContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

import {
    CartIconContainer,
    CartIconImage,
    CartIconNumber
} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleCart}>
            <CartIconImage/>
            <CartIconNumber>{cartCount}</CartIconNumber>
        </CartIconContainer>
    )
}
export default CartIcon;