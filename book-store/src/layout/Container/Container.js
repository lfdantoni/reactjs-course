import React from 'react'
import MatContainer from '@material-ui/core/Container'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import {Header} from '../Header'
import {Footer} from '../Footer'
import { BookListContainer } from '../../pages/BookList'
import { AddBook } from '../../pages/AddBook';
import { BookDetails } from '../../pages/BookDetails';
import { NotFound } from '../../pages/NotFound';
import { store } from '../../store';

import './container.css'

export const Container = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <MatContainer maxWidth="lg" className="content">
          {/* <Route path="/" exact component={BookList} /> */}
          <Switch>
            <Route path="/" exact component={BookListContainer} />
            <Route path="/add" component={AddBook} />
            {/* <Route path="/detail" component={BookList} /> */}
            <Route path="/detail/:bookId" exact component={BookDetails} />
            <Route component={NotFound} />
          </Switch>
          {/* <BookList /> */}
        </MatContainer>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
