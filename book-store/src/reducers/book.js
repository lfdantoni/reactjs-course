import { BOOK_ACTION_TYPES } from "../actions/book";

const INITIAL_STATE = {
  loading: false,
  list: [],
  error: null
}

export const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOK_ACTION_TYPES.GET_BOOKS:
      return {
        ...state,
        loading: true
      };
    case BOOK_ACTION_TYPES.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.books
      }
    case BOOK_ACTION_TYPES.GET_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}