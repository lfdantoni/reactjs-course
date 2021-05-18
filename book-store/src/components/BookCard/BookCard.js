import React, { Component, PureComponent } from 'react'

import './book-card.css'

// export const BookCard = (props) => {
// export const BookCard = ({book, onCartClick}) => {
export class BookCard extends PureComponent {
  render() {
    const {book, onCartClick} = this.props;

      console.log('BookCard', book.random)
      return (
        <div>
          BookCard {book.id}
          <button onClick={() => onCartClick(book)}>Add to Cart</button>
        </div>
      )
  }

}
