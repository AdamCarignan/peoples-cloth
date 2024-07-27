import Button from '../button/button.component';
import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <span>Your cart is empty</span>
            </div>
            <Button buttonType="inverted" className='cart-dropdown-button'>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;