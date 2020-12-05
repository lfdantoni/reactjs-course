import React, { Fragment } from 'react'
import { BookCard } from '../../components/BookCard'
import {getBookList} from '../../api/books'

export class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      booksFiltered: [],
      filterValue: '',
      bookCart: [] 
    }

    // this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const books = getBookList();

    this.setState({
      books
    })
  }

  addToCart = (book) => {
    this.setState((state) => {
      return {
        bookCart: state.bookCart.concat(book)
      } 
    })
  }

  render() {
    const {books, bookCart} = this.state;
    // const books = this.state.books;

    return (
      <Fragment>
        {bookCart.length}
          {
            books.map(book => (
            <BookCard
              key={book.id} 
              book={book}
              onAddCartHandler={this.addToCart}
            />
          ))
          }

      </Fragment>
    )
  }
}
