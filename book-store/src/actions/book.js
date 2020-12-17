const BOOK_ACTION_TYPES = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAIL: 'GET_BOOKS_FAIL'
}

const getBooks = () => {
  return {
    type: BOOK_ACTION_TYPES.GET_BOOKS
  }
}

const getBooksSuccess = (books) => {
  return {
    type: BOOK_ACTION_TYPES.GET_BOOKS_SUCCESS,
    payload: {
      books
    }
  }
}

const getBooksFail = (error) => {
  return {
    type: BOOK_ACTION_TYPES.GET_BOOKS_FAIL,
    payload: {
      error
    }
  }
}

export {
  BOOK_ACTION_TYPES,
  getBooks,
  getBooksSuccess,
  getBooksFail
}