import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import productList from './products.json';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

const App = () => {
  // Create state to hold products
  const [products, setProducts] = useState([])

  // Add products on app mount. Time to fetch data from source of truth.
  useEffect(() => {
    setProducts(productList)
  }, [])

  return (
      <Router>
      <div className="App">
        <Header />
        { products.length &&
          <Switch>
          <Route path="/" exact component={()=><ProductsPage products={products} />} />
          <Route path="/p/:id" component={({match})=><ProductPage products={products} selectedId={+match.params.id}/>} />
          <Route component={NotFound} />
          </Switch>
        }
        
      </div>
      </Router>
    );
  }


export default App;
