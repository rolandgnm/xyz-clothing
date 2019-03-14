import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button, Icon } from 'semantic-ui-react';
import ProductSummary from '../components/xyz/ProductSummary';
import Price from '../components/xyz/Price';
import { Layout } from '../components/Layout';
import { COLOR } from '../constants';

const getSelectedProduct = (products, selectedId) =>
  products ? products.find(prod => prod.id === selectedId) : undefined;

const getRelatedProducts = (products, relatedProducts) =>
  products ? products.filter(prod => relatedProducts.includes(prod.id)) : [];

const Id = styled.span`
  color: ${COLOR.TEXT_WEAK};
  font-size: 0.5em;
`;

const Description = styled.p`
  margin-bottom: 2em;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NameDescWrapper = styled.div`
  flex: 1 0 500px;
  margin: 0 1em 2em 0;
`;

const ProductPage = ({ pageContext: { products, selectedId } }) => {
  const selectedProduct = getSelectedProduct(products, selectedId);

  const relatedProducts = getRelatedProducts(products, selectedProduct.relatedProducts);
  const { id, name, description, price } = selectedProduct;
  return (
    <Layout>
      <Link to="/" style={{ color: COLOR.TEXT }}>
        <Button icon circular>
          <Icon name="arrow left" />
        </Button>
        Products
      </Link>
      <DetailsWrapper>
        <NameDescWrapper>
          <h2>
            {name}
            <Id> #{id}</Id>
          </h2>
          <Description>{description}</Description>
        </NameDescWrapper>
        <Price {...price} large />
      </DetailsWrapper>
      <br />
      <h3>Related</h3>
      <div>
        {relatedProducts.map(relatedProduct => (
          <ProductSummary key={relatedProduct.id} {...relatedProduct} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductPage;
