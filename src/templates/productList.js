import React, { Fragment } from 'react';
import ProductSummary from '../components/xyz/ProductSummary';

import { Layout } from '../components/Layout';

const ProductsPage = ({ pageContext: { products } }) => (
  <Layout>
    <h1>Products</h1>
    {products.map(product => (
      <Fragment key={product.id}>
        <br />
        <ProductSummary {...product} />
      </Fragment>
    ))}
  </Layout>
);

export default ProductsPage;