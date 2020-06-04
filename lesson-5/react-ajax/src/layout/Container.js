import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import PostList from '../components/PostList'

export default function Container() {
  return (
    <Fragment>
      <Header />
      {/* we can set any component */}
      <Content component={PostList}/>

      {/* we can set any children */}
      {/* <Content>
        <PostList />
      </Content> */}
      <Footer />
    </Fragment>
  )
}
