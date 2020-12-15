import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../../actions/book'
import { BookList } from './BookList';

class _BookListContainer extends PureComponent {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <BookList 
        books={this.props.books}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () =>{ dispatch(getBooks()) }
  }
}

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BookListContainer)
