import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import {
    ProductsContainer,
    ProductsTitle
} from './products.styles';

const Products = () => {
    const { product } = useParams();
    const { productMap } = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productMap[product]);
    }, [product, productMap]);

    return (
        <Fragment>
            <ProductsTitle>{product.toUpperCase()}</ProductsTitle>
            <ProductsContainer>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </ProductsContainer>
        </Fragment>
    );
}

export default Products;