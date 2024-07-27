import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingCartIcon className='shopping-icon'/>
            <span className='shopping-icon-number'>{cartCount}</span>
        </div>
    )
}
export default CartIcon;