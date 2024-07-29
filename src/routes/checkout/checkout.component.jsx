import { CartContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal
} from './checkout.styles.jsx';

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>
                        Product
                    </span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>
                        Description
                    </span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>
                        Quantity
                    </span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>
                        Price
                    </span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>
                        Remove
                    </span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                const {name, price, quantity, id} = cartItem;
                return (
                    <CheckoutItem  cartItem={cartItem} />
                )
            })}
                
            <CheckoutTotal>
                Total: ${cartTotal}
            </CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;