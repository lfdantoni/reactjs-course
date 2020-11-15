import React, { Fragment } from 'react';
import { BookList } from '../../pages/BookList';
import { Footer } from '../Footer';
import { Header } from '../Header';
import MatContainer from '@material-ui/core/Container'
import './container.css';

export const Container = () => {
  return (
    <Fragment>
      <Header/>
      
      <MatContainer maxWidth="lg" className="content">
        <BookList />
      </MatContainer>

      <Footer/>
    </Fragment>
  )
}