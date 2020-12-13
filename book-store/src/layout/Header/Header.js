import React from 'react';
import { Grid } from '@material-ui/core';
import MatContainer from '@material-ui/core/Container';

import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const inlineStyles = {
  wrapper: {
    height: '50px'
  },
  activeLink: {
    color: 'white'
  }
}

export const Header = () => {
  return <div style={inlineStyles.wrapper}>
    <div className={styles.header}>
      <MatContainer maxWidth="lg">
        <Grid container spacing={0} className={styles['header-wrapper']} alignItems="center">
          <Grid item xs={2}>
            {/* <Link to="/">Book List</Link> */}
            <NavLink to="/" activeStyle={inlineStyles.activeLink}>Book List</NavLink>
          </Grid>
          <Grid item xs={2}>
            <NavLink to="/add" activeStyle={inlineStyles.activeLink}>Add Book</NavLink>
          </Grid>
        </Grid>
      </MatContainer>
    </div>
  </div>
}