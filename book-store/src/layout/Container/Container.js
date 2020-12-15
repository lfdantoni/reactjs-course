import React from 'react';
import MatContainer from '@material-ui/core/Container'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
// import { BookList } from '../../pages/BookList';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { AddBook } from '../../pages/AddBook';
import { NotFound } from '../../pages/NotFound';
import { BookDetails } from '../../pages/BookDetails';
import { store } from '../../store';
import { BookListContainer } from '../../pages/BookList/BookListContainer';

import './container.css';

export const Container = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        
        {/* <Route path="/" exact component={BookList} /> */}
        <MatContainer maxWidth="lg" className="content">
          <Switch>
            <Route path="/" exact component={BookListContainer} />
            <Route path="/add" component={AddBook} />
            {/* <Route path="/detail" component={BookList} /> */}
            <Route path="/detail/:bookId" exact component={BookDetails} />
            <Route component={NotFound} />
          </Switch>
        </MatContainer>

        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}