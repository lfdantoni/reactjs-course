import React, { Fragment } from 'react'

const styles = {
  border: 'red 1px solid',
  padding: '0.5em'
}

export default function Content({component: InnerComponent, children}) {
  return (
    <div style={styles}>
      { InnerComponent ? <InnerComponent isAuthenticated={true} /> : children}
    </div>
  )
}
