import {
    CartItemContainer,
    CartItemImage,
    CartItemDetails,
    CartItemName
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <span className='cart-item-quantity'>
                    ${price} x {quantity}
                </span>
            </CartItemDetails>
        </CartItemContainer>
    )
}
export default CartItem;    