import { Routes, Route } from 'react-router-dom';
import ProductsPreview from '../products-preview/products-preview.component';
import Products from '../products/products.component';
const Shop = () => {
    return (
        <Routes>
            <Route index element={<ProductsPreview/>}/>
            <Route path=":product" element={<Products/>}/>
        </Routes>
    );
}
export default Shop;