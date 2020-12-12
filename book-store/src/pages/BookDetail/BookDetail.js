import React from 'react'

export const BookDetail = ({match}) => {
  console.log('BookDetail', match)
  return (
    <div>
      BookDetail {match.params.bookId}
    </div>
  )
}
