/*
 * File: HttpClient.js
 * Project: react-hooks-ss
 * Created: Monday, September 18th 2023, 5:56:30 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:41 am
 * Copyright © 2023 AMDE Agência
 */

import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default HttpClient;
