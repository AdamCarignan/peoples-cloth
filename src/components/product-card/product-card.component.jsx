import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-dropdown.context';
import Button from '../button/button.component';
import {
    ProductCardContainer,
    ProductCardFooter,
    ProductCardName,
    ProductCardPrice,
    ProductCardImage,
    ProductCardButton
} from './product-card.styles';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addToCart = () => {
        return addItemToCart(product)
    }
    return  (
        <ProductCardContainer>
            <ProductCardImage src={imageUrl} alt={name}/>
            <ProductCardFooter>
                <ProductCardName>
                    {name}
                </ProductCardName>
                <ProductCardPrice>
                    {price}
                </ProductCardPrice>
                <ProductCardButton buttonType='inverted' onClick={addToCart}>Add to cart</ProductCardButton>
            </ProductCardFooter>
        </ProductCardContainer>
    )
}
export default ProductCard;