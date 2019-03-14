import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrencyContext from '../../context/CurrencyContext';
import { COLOR } from '../../constants';

const getDisplayPrice = (amount, exchangeRates, fromBase, toBase) => {
  if (fromBase === toBase) {
    return amount.toFixed(2);
  }
  const { rates } = exchangeRates.find(exRate => exRate.base === fromBase);
  return Number(amount * rates[toBase]).toFixed(2);
};

const PriceWrapper = styled.span`
  color: ${COLOR.TEXT};
  font-size: 1.2em;

  & sup {
    font-size: 0.6em;
  }
`;

const Price = ({ base: productBase, amount }) => {
  const { currency: selectedCurrency, exchangeRates } = useContext(CurrencyContext);
  return (
    <PriceWrapper>
      <sup>{selectedCurrency}</sup>
      {getDisplayPrice(amount, exchangeRates, productBase, selectedCurrency)}
    </PriceWrapper>
  );
};

export default Price;
