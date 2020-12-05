import React from 'react'
import { BookCard } from '../../components/BookCard'
import {getBookList} from '../../api/books'

export class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      booksFiltered: [],
      filterValue: '', 
    }
  }

  render() {
    const books = getBookList();

    return (
      <div>
        {
          books.map(book => (
            <BookCard
              key={book.id} 
              book={book}
            />
          ))
        }
      </div>
    )
  }
}
