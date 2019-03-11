import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';

const ProductSummary = ({ id, name, price }) => (
  <Link to={`/p/${id}`}>
    <div>
      <span>{name}</span>
      {' '}
      -
      {' '}
      <Price {...price} />
    </div>
  </Link>
);
export default ProductSummary;
