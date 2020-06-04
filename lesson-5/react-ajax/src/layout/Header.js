import React from 'react'

const styles = {
  border: 'green 1px solid',
  fontSize: '3em',
  width: '100%',
  textAlign: 'center',
  verticalAlign: 'center'
}

export default function Header() {
  return (
    <div style={styles}>
      <h1>Header</h1>
    </div>
  )
}
