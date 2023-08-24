import React, { useState } from 'react';

const App = () => {
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

export default App;
