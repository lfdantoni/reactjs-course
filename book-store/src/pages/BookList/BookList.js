import React from 'react'
import { BookCard } from '../../components/BookCard/BookCard'

export const BookList = () => {
  const book = {id: 75675}

  return (
    <div>
      BookList Page
      <BookCard book={book}/>
    </div>
  )
}
