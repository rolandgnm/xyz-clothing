import React from 'react'
import ProductSummary from '../components/ProductSummary';
import {Link, Redirect} from 'react-router-dom';

const getSelectedProduct = (products, selectedId) => products ?
    products.find(prod => prod.id === selectedId)
    : undefined

const getRelatedProducts = (products, relatedProducts) => products ?
    products.filter(prod => relatedProducts.includes(prod.id))
    : []

const ProductPage = ({ products, selectedId }) => {
    const selectedProduct = getSelectedProduct(products, selectedId)
    
    if(!selectedProduct) return <Redirect to="/404" />
    
    const relatedProducts = getRelatedProducts(products, selectedProduct.relatedProducts)
    const { id, name, description, price,  } = selectedProduct
    return (
        <div>   
        <div><Link to="/">Products</Link></div>
        <br/>
        <div>
            <h2>#{id} {name}</h2>
            <p>{description}</p>
            <div> {price.base} {price.amount} </div>
        </div>
        <br/>
        <h3>Related</h3>
        <div>
            {relatedProducts.map(relatedProduct => (
                <ProductSummary key={relatedProduct.id} {...relatedProduct} />
            ))}
        </div>
        </div>
    )
}

export default ProductPage