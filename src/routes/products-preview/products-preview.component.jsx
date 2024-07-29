import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductPreview from '../../components/product-preview/product-preview.component';

const ProductsPreview = () => {
    const { productMap } = useContext(ProductsContext);
    
    return (
        <Fragment>
            {Object.keys(productMap).map((key) => {
                const products = productMap[key];
                return <ProductPreview key={key} title={key} products={products} />;
            })}
        </Fragment>
    );
}
export default ProductsPreview;