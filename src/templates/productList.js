import React from 'react';
import ProductSummary from '../components/xyz/ProductSummary';

import { Layout } from '../components/Layout';

const ProductsPage = ({ pageContext: { products } }) => (
  <Layout>
    <h2>Products</h2>
    {products.map(product => (
      <ProductSummary key={product.id} {...product} />
    ))}
  </Layout>
);

export default ProductsPage;
