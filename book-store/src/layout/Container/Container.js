import React, { Fragment } from 'react';
import { BookList } from '../../pages/BookList';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './container.css';

export const Container = () => {
  return (
    <Fragment>
      <Header/>
      
      <Container maxWidth="sm">
        <BookList />
      </Container>

      <Footer/>
    </Fragment>
  )
}