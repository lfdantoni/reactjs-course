import React, { Fragment } from 'react';
import { BookList } from '../../pages/BookList';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './container.css';

export const Container = () => {
  return (
    <Fragment>
      <Header/>
      
      <div className="content">
        Content
        <BookList />
      </div>

      <Footer/>
    </Fragment>
  )
}