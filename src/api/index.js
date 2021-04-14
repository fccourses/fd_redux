import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createHero = async data => {
  const responsePromise = httpClient.post('/superheroes', data);
  return responsePromise;
};

export const getHeroes = ({ limit = 5, offset = 0 } = {}) => {
  const promise = httpClient.get(
    `/superheroes?${queryString.stringify({ limit, offset })}`
  );
  return promise;
};
