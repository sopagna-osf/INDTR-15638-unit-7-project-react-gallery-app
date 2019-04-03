import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="error-container">
    <h1>404</h1>
    <p className="message">Oop! Nothing was found!</p>
    <Link to="/">← Back to homepage</Link>
  </div>
);

export default PageNotFound;