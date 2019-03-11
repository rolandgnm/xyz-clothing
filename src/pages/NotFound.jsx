import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    Not Found!
    <br />
    <Link to="/">back to products</Link>
  </div>
);

export default NotFound;
