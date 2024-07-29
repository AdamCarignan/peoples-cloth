import { CartContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';
import {
    CheckoutItemContainer,
    CheckoutImage,
    CheckoutArrow,
    CheckoutValue
} from './checkout-item.styles';

import {
    CATEGORY_COLUMN_TYPE_CLASSES,
    CheckoutItemColumn,
} from '../checkout-item-column/checkout-item-column.component';

const CheckoutItem = ({cartItem}) => {

    const {imageUrl, name, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, removeItemFromCheckout} = useContext(CartContext);


    return (
        <CheckoutItemContainer>
            <CheckoutItemColumn type={CATEGORY_COLUMN_TYPE_CLASSES.image}>
                <span>
                    <CheckoutImage src={imageUrl} alt={name} />
                </span>
            </CheckoutItemColumn>
            <CheckoutItemColumn>
                <span>
                    {name}
                </span>
            </CheckoutItemColumn>
            <CheckoutItemColumn type={CATEGORY_COLUMN_TYPE_CLASSES.quantity}>
                <CheckoutArrow onClick={() => removeItemFromCart(cartItem)}>
                    <span>&#10094;</span>
                </CheckoutArrow>
                <CheckoutValue>
                    {quantity} 
                </CheckoutValue>
                <CheckoutArrow onClick={() => addItemToCart(cartItem)}>
                    <span>&#10095;</span>
                </CheckoutArrow>
            </CheckoutItemColumn>

            <CheckoutItemColumn type={CATEGORY_COLUMN_TYPE_CLASSES.price}>
                <span>
                    ${price}
                </span>
            </CheckoutItemColumn>

            <CheckoutItemColumn type={CATEGORY_COLUMN_TYPE_CLASSES.remove}>
                <span>
                    <button onClick={() => removeItemFromCheckout(cartItem)}>
                        &#10005;
                    </button>
                </span>
            </CheckoutItemColumn>
        </CheckoutItemContainer>
    )
}
export default CheckoutItem;