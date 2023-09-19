/*
 * File: HttpGet.js
 * Project: react-hooks-ss
 * Created: Monday, September 18th 2023, 5:43:01 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:38 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useEffect, useState } from 'react';
import HttpClient from './HttpClient';

const HttpGet = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data } = await HttpClient.get('/products');
      setProducts(data.products);
    } catch ({ message }) {
      setError(message);
    }
  }

  return (
    <>
      {error && error}
      {products.map((product, index) => {
        return (
          <h3 key={index}>
            {product.title}: ${product.price}
          </h3>
        );
      })}
    </>
  );
};

export default HttpGet;
