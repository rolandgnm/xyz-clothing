import React, { useState } from 'react';
import exchangeRates from '../data/exchange_rates.json';

const CurrencyContext = React.createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('AUD');

  const context = {
    currency,
    setCurrency,
    exchangeRates,
  };

  return <CurrencyContext.Provider value={context}>{children}</CurrencyContext.Provider>;
};

export default CurrencyContext;

export { CurrencyProvider };
