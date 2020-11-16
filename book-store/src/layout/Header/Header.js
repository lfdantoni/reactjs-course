import React from 'react';
import styles from './header.module.css';

const inlineStyles = {
  wrapper: {
    height: '50px'
  }
}

export const Header = () => {
  return <div style={inlineStyles.wrapper}>
    <div className={styles.header}>
      Header
    </div>
  </div>
}