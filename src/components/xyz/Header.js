import React, { useContext } from 'react';
import CurrencyContext from '../../context/CurrencyContext';

const Header = () => {
  const { currency, setCurrency, exchangeRates } = useContext(CurrencyContext);
  return (
    <header>
      <span className="logo">XYZ Clothing</span>{' '}
      <select
        value={currency}
        onChange={event => {
          setCurrency(event.target.value);
        }}
      >
        {exchangeRates.map(curr => (
          <option key={curr.base}>{curr.base}</option>
        ))}
      </select>
    </header>
  );
};

export default Header;
