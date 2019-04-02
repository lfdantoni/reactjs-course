import React from 'react';
import styles from './Madre.module.css'; // CSS Module

const Madre = (props) => {
    return <h1 className={styles.title}>Madre, me llamo {props.nombre}</h1>
}

export default Madre;