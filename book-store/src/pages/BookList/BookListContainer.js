import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBooks, getBooksFail, getBooksSuccess } from '../../actions/book'
import { BookList } from './BookList';
import { getBookList } from '../../api/books';

class _BookListContainer extends PureComponent {
  componentDidMount() {
    this.props.getBooks();

    getBookList()
      .then(books => this.props.getBooksSuccess(books))
      .catch(error => this.props.getBooksFail(error));

    // setTimeout(
    //   () => this.props.getBooksSuccess(getBookList()),
    //   5000
    // )
  }

  render() {
    return (
      this.props.loading ?

      <div>LOADING...</div> :

      <BookList 
        books={this.props.books}
      />
    )
  }
}

const mapStateToProps = (state, owns) => {

  console.log(owns)
  return {
    books: state.books.list,
    loading: state.books.loading,
    error: state.books.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks()),
    getBooksSuccess: (books) => dispatch(getBooksSuccess(books)),
    getBooksFail: (error) => dispatch(getBooksFail(error))
  }
}

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BookListContainer)

/**
 export const BookListContainer = connect(
  null,
  mapDispatchToProps
)(_BookListContainer)


 export const BookListContainer = connect(
  mapStateToProps
)(_BookListContainer)
 */