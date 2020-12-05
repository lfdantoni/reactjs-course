import React, { Fragment } from 'react'
import { BookList } from '../../pages/BookList'
import {Footer} from '../Footer'
import {Header} from '../Header'

export const Container = () => {
  return (
    <Fragment>
      <Header />

      <BookList />

      <Footer />
    </Fragment>
  )
}
