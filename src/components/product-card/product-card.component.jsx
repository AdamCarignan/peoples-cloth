import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = (product) => {
    const {name, price, imageUrl} = product;
    return  (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className="product-card-footer">
                <span className='product-card-name'>
                    {name}
                </span>
                <span className='product-card-price'>
                    {price}
                </span>
                <Button buttonType='inverted'>Add to cart</Button>
            </div>
        </div>
    )
}
export default ProductCard;