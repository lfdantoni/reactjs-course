import React from 'react';
import MatContainer from '@material-ui/core/Container'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { BookList } from '../../pages/BookList';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { AddBook } from '../../pages/AddBook';
import { NotFound } from '../../pages/NotFound';
import { BookDetails } from '../../pages/BookDetails';

import './container.css';

export const Container = () => {
  return (
    <BrowserRouter>
      <Header/>
      
      <MatContainer maxWidth="lg" className="content">
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/add" component={AddBook} />
          <Route path="/detail/:bookId" exact component={BookDetails} />
          <Route component={NotFound} />
        </Switch>
      </MatContainer>

      <Footer/>
    </BrowserRouter>
  )
}