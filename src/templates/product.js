import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import ProductSummary from '../components/xyz/ProductSummary';
import Price from '../components/xyz/Price';
import { Layout } from '../components/Layout';

const getSelectedProduct = (products, selectedId) =>
  products ? products.find(prod => prod.id === selectedId) : undefined;

const getRelatedProducts = (products, relatedProducts) =>
  products ? products.filter(prod => relatedProducts.includes(prod.id)) : [];

const ProductPage = ({ pageContext: { products, selectedId } }) => {
  const selectedProduct = getSelectedProduct(products, selectedId);

  const relatedProducts = getRelatedProducts(products, selectedProduct.relatedProducts);
  const { id, name, description, price } = selectedProduct;
  return (
    <Layout>
      <div>
        <Link to="/">{'<'} Products</Link>
      </div>
      <br />
      <div>
        <h2>
          #{id} {name}
        </h2>
        <p>{description}</p>
        <div>
          {' '}
          <Price {...price} />{' '}
        </div>
      </div>
      <br />
      <h3>Related</h3>
      <div>
        {relatedProducts.map(relatedProduct => (
          <Fragment key={relatedProduct.id}>
            <br />
            <ProductSummary {...relatedProduct} />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default ProductPage;
