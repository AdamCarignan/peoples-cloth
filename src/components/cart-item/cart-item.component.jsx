import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='cart-item-details'>
                <span className='cart-item-name'>{name}</span>
                <span className='cart-item-quantity'>
                    ${price} x {quantity}
                </span>
            </div>
        </div>
    )
}
export default CartItem;    