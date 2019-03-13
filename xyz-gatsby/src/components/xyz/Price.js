import React, { useContext } from 'react';
import CurrencyContext from '../../context/CurrencyContext';

const getDisplayPrice = (amount, exchangeRates, fromBase, toBase) => {
  if (fromBase === toBase) {
    return amount.toFixed(2);
  }
  const { rates } = exchangeRates.find(exRate => exRate.base === fromBase);
  return Number(amount * rates[toBase]).toFixed(2);
};

const Price = ({ base: productBase, amount }) => {
  const { currency: selectedCurrency, exchangeRates } = useContext(CurrencyContext);
  return (
    <span>
      {selectedCurrency} {getDisplayPrice(amount, exchangeRates, productBase, selectedCurrency)}
    </span>
  );
};

export default Price;
