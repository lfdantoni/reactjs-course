import React from 'react'
import {Paper} from '@material-ui/core'
import styles from './styles.module.css'

export default function Header() {
  return (
    <Paper elevation={3} className={styles.wrapper}>
      Meme Generator
    </Paper>
  )
}
