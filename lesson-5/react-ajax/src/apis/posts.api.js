const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return fetch(`${API_URL}/posts`)
    .then(response => response.json());
}