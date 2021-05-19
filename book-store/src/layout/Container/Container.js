import React from 'react'
import MatContainer from '@material-ui/core/Container'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Header} from '../Header'
import {Footer} from '../Footer'
import { BookList } from '../../pages/BookList'
import { AddBook } from '../../pages/AddBook';
import { BookDetails } from '../../pages/BookDetails';
import { NotFound } from '../../pages/NotFound';

import './container.css'

export const Container = () => {
  return (
    <BrowserRouter>
      <Header />

      <MatContainer maxWidth="lg" className="content">
        {/* <Route path="/" exact component={BookList} /> */}
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/add" component={AddBook} />
          {/* <Route path="/detail" component={BookList} /> */}
          <Route path="/detail/:bookId" exact component={BookDetails} />
          <Route component={NotFound} />
        </Switch>
        {/* <BookList /> */}
      </MatContainer>
      <Footer />
    </BrowserRouter>
  )
}
