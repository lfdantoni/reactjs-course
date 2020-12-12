import React from 'react'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import { AddBook } from '../../pages/AddBook'
import { BookDetail } from '../../pages/BookDetail'
import { BookList } from '../../pages/BookList'
import { NotFound } from '../../pages/NotFound'
import {Footer} from '../Footer'
import {Header} from '../Header'

export const Container = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/add" component={AddBook}/>
        <Route path="/detail/:bookId" component={BookDetail}/>
        <Route path="/" exact component={BookList}/>
        <Route component={NotFound} />
      </Switch>


      {/* <BookList /> */}

      <Footer />
    </BrowserRouter>
  )
}
