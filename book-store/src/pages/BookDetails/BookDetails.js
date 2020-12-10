import React from 'react'
import { NavLink } from 'react-router-dom';

export const BookDetails = (props) => {
  console.log('BookDetails', props);

  return (
    <div>
      BookDetails {props.match.params.bookId}
      <NavLink to="/">Book List</NavLink>
    </div>
  )
}
