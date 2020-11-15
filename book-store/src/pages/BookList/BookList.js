import React from 'react';
import {getBookList} from '../../api/books';
import {BookCard} from '../../components/BookCard';
import Grid from '@material-ui/core/Grid'

import './book-list.css'

export const BookList = () => {
  const books = getBookList();

  return (
    <Grid container spacing={3}>
    {
      books.map(book => (
        <Grid key={book.id} container item xs={3}>
          <BookCard 
            key={book.id}
            book={book}
            className="book-list-item"
          />
        </Grid>
      ))
    }
    </Grid>
  )
}