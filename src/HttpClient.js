import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const HttpClient = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(({ data }) => setProducts(data.products));
  });
  return (
    <>
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
