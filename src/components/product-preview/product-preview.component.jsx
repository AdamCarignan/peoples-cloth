import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import {
    ProductPreviewContainer,
    ProductPreviewTitle,
    ProductPreviewBody
} from './product-preview.styles';

const ProductPreview = ({title, products}) => (
        <ProductPreviewContainer>
            <ProductPreviewTitle>
                <Link to={title}>
                    {title.toUpperCase()}
                </Link>
            </ProductPreviewTitle>
            <ProductPreviewBody>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductPreviewBody>
        </ProductPreviewContainer>
    
)
export default ProductPreview;