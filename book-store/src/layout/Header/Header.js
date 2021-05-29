import React from 'react'
import { Grid } from '@material-ui/core';
import MatContainer from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

const inlineStyles = {
  wrapper: {
    height: '50px'
  }
}

export const Header = () => {
  return (
<div style={inlineStyles.wrapper}>
    <div className={styles.header}>
      <MatContainer maxWidth="lg">
        <Grid container spacing={0} className={styles['header-wrapper']} alignItems="center">
          <Grid item xs={2}>
            <Link to="/">Book List</Link>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </MatContainer>
    </div>
  </div>
  )
}
