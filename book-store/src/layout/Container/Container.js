import React from 'react'
import {Header} from '../Header'
import {Footer} from '../Footer'
import { BookList } from '../../pages/BookList'

import './container.css'

export const Container = () => {
  return (
    <>
      <Header />
      Container
      <BookList />
      <Footer />
    </>
  )
}
