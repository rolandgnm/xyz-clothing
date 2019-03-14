import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Grid } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import Price from './Price';
import { COLOR } from '../../constants';

const ProductName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: ${COLOR.TEXT};
`;

const ProductId = styled.div`
  font-size: 0.8em;
  color: ${COLOR.TEXT_WEAK};
`;

const ProductSummary = ({ id, name, price, fluid }) => (
  <Segment>
    <Link to={`/p/${id}`}>
      <Grid verticalAlign="middle">
        <Grid.Column floated="left" mobile={16} tablet={14} computer={14}>
          <ProductName>{name}</ProductName>
          <ProductId>#{id}</ProductId>
        </Grid.Column>
        <Grid.Column floated="right" mobile={16} tablet={2} computer={2}>
          <Price {...price} />
        </Grid.Column>
      </Grid>
    </Link>
  </Segment>
);

export default ProductSummary;
