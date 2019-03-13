import React from 'react';
import { Link } from 'gatsby';
import Price from './Price';

const ProductSummary = ({ id, name, price }) => (
  <Link to={`/p/${id}`}>
    <span>
      <span>{name}</span> - <Price {...price} />
    </span>
  </Link>
);
export default ProductSummary;
