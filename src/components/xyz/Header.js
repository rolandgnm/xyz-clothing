import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLOR, LAYOUT } from '../../constants';
import CurrencyContext from '../../context/CurrencyContext';
import CurrencySelect from './CurrencySelect';

const HeaderWrapper = styled.header`
  background-color: ${COLOR.HEADER_BAR};
  color: white;
  padding: 0.75em;
`;

const HeaderInner = styled.div`
  max-width: ${LAYOUT.MAX_WIDTH};
  margin: auto;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`;

const Header = () => {
  const { currency, setCurrency, exchangeRates } = useContext(CurrencyContext);
  return (
    <HeaderWrapper>
      <HeaderInner>
        <span className="logo">XYZ Clothing</span>{' '}
        <CurrencySelect currency={currency} exchangeRates={exchangeRates} onChange={setCurrency} />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
