import React from 'react'
import MatContainer from '@material-ui/core/Container'
import {Header} from '../Header'
import {Footer} from '../Footer'
import { BookList } from '../../pages/BookList'

import './container.css'

export const Container = () => {
  return (
    <>
      <Header />
      <MatContainer maxWidth="lg" className="content">
        <BookList />
      </MatContainer>
      <Footer />
    </>
  )
}
