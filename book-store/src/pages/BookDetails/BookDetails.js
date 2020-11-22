import React from 'react'

export const BookDetails = (props) => {
  console.log('BookDetails', props);

  return (
    <div>
      BookDetails {props.match.params.bookId}
    </div>
  )
}
