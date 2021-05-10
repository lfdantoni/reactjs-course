import React from 'react'

import './book-card.css'

// export const BookCard = (props) => {
export const BookCard = ({book, onCartClick}) => {
  return (
    <div>
      BookCard {book.id}
      <button onClick={() => onCartClick(book)}>Add to Cart</button>
    </div>
  )
}
