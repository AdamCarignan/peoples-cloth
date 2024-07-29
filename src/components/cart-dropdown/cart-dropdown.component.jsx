import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-dropdown.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                    ) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )}
            </CartItemsContainer>
            <Button buttonType="inverted" onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown;