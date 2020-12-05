import React from 'react'

export const BookCard = ({book, onAddCartHandler}) => {
  return (
    <div>
      BookCard {book.title}
      <button onClick={() => onAddCartHandler(book)}>Add to Cart</button>
    </div>
  )
}
