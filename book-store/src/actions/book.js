const BOOK_ACTION_TYPES = {
  GET_BOOKS: 'GET_BOOKS'
}

const getBooks = () => {
  return {
    type: BOOK_ACTION_TYPES.GET_BOOKS
  }
}

export {
  BOOK_ACTION_TYPES,
  getBooks
}