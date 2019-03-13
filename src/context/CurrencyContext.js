import React, { useState } from 'react';
import exchangeRates from '../data/exchange_rates.json';

const CurrencyContext = React.createContext();

const CurrencyProvider = ({ children }) => {
  const localCurrency = localStorage.getItem('currency');
  const [currency, setCurrency] = useState(localCurrency || 'AUD');

  const context = {
    currency,
    setCurrency: newCurrency => {
      localStorage.setItem('currency', newCurrency);
      setCurrency(newCurrency);
    },
    exchangeRates,
  };

  return <CurrencyContext.Provider value={context}>{children}</CurrencyContext.Provider>;
};

export default CurrencyContext;

export { CurrencyProvider };
