import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default HttpClient;
