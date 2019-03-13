import React from 'react';
import ProductSummary from '../components/xyz/ProductSummary';

import { Layout } from '../components/Layout';

const ProductsPage = ({ pageContext: { products } }) => (
  <Layout>
    <h1>Products</h1>
    {products.map(product => (
      <>
        <br />
        <ProductSummary key={product.id} {...product} />
      </>
    ))}
  </Layout>
);

export default ProductsPage;
