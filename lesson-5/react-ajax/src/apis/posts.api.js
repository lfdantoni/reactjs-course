const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return fetch(`${API_URL}/posts`)
    .then(response => response.json());
}

export const addPost = (userId, title, body) => {
  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
}