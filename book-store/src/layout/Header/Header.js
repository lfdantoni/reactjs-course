import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const inlineStyles = {
  activeLink: {
    color: 'red',
    fontSize: '20px'
  }
}

export const Header = () => {
  return (
    <div className={styles.title}>
      Header
      <NavLink to="/" exact activeStyle={inlineStyles.activeLink}>List Book</NavLink>
      <NavLink to="/add" exact activeStyle={inlineStyles.activeLink}>Add Book</NavLink>
      {/* <Link to="/add">Add Book</Link> */}
    </div>
  )
}
