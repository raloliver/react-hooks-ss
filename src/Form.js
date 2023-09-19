/*
 * File: Form.js
 * Project: react-hooks-ss
 * Created: Monday, September 18th 2023, 5:42:37 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:46 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
  });

  function handleChange(input) {
    const { name, value } = input.target;

    setUserDetails((state) => {
      return { ...state, [name]: value };
    });
  }

  function handleSubmit(form) {
    form.preventDefault();
    console.log(userDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name:</h3>
      <input
        type="text"
        name="name"
        onChange={handleChange}
      />
      <h3>Email:</h3>
      <input
        type="email"
        name="email"
        onChange={handleChange}
      />
      <h3>Password:</h3>
      <input
        type="password"
        name="password"
        onChange={handleChange}
      />
      <h3>Bio:</h3>
      <textarea
        name="bio"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
