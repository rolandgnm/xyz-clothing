import React from 'react'
import ProductSummary from '../components/ProductSummary';

const ProductsPage = ({ products = [] }) => (
    <>
        <h1>Products</h1>
        {products
            ? products.map(product => (
                <ProductSummary key={product.id} {...product}/>
            ))
            : <div>Loading products...</div>
        }
    </>
)

export default ProductsPage