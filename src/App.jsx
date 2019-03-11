import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import productList from './products.json';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import exchangeRates from './exchange_rates.json';
import CurrencyContext from './components/CurrencyContext';

const App = () => {
  // Create state to hold products
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState('AUD');

  // Add products on app mount. Time to fetch data from source of truth.
  useEffect(() => {
    setProducts(productList);
  }, []);

  const context = {
    currency,
    setCurrency,
    exchangeRates,
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CurrencyContext.Provider value={context}>
        <div className="App">
          <Header />
          {products.length
            && (
              <Switch>
                <Route path="/" exact component={() => <ProductsPage products={products} />} />
                <Route path="/p/:id" component={({ match }) => <ProductPage products={products} selectedId={+match.params.id} />} />
                <Route component={NotFound} />
              </Switch>
            )
          }

        </div>
      </CurrencyContext.Provider>
    </Router>
  );
};


export default App;
