
// custom env variables should start with REACT_APP_ in the .env file
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GET_BOOKS_URL = `${BASE_URL}books`;
export const GET_CATEGORIES_URL = `${BASE_URL}categories`;