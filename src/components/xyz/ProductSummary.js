import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const NameIdWrapper = styled.div`
  flex: 2 0 260px;
`;

const FlexPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const ProductSummary = ({ id, name, price }) => (
  <Segment>
    <Link to={`/p/${id}`}>
      <FlexWrapper>
        <NameIdWrapper>
          <ProductName>{name}</ProductName>
          <ProductId>#{id}</ProductId>
        </NameIdWrapper>
        <FlexPrice>
          <Price {...price} />
        </FlexPrice>
      </FlexWrapper>
    </Link>
  </Segment>
);

export default ProductSummary;
