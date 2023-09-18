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
      const { data } = HttpClient.get('/products');
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
