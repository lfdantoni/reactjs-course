import { BOOK_ACTION_TYPES } from "../actions/book";
import { getBookList } from "../api/books";

export const books = (state = [], action) => {
  switch (action.type) {
    case BOOK_ACTION_TYPES.GET_BOOKS:
      return getBookList() // it does not work if getBookList is async due an ajax call
    default:
      return state;
  }
}