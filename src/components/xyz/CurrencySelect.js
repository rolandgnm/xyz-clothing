import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import memoizeOne from 'memoize-one';

const mapExchangeRatesToOptions = exchangeRates =>
  exchangeRates.map(currency => ({ text: currency.base, value: currency.base }));

const memoizedOptionsMap = memoizeOne(mapExchangeRatesToOptions);

const SUICurrencySelect = ({ currency, onChange, exchangeRates }) => (
  <Dropdown
    inline
    options={memoizedOptionsMap(exchangeRates)}
    value={currency}
    onChange={(e, { value }) => onChange(value)}
  />
);

export default SUICurrencySelect;
