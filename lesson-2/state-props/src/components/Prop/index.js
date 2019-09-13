import React from 'react';
import styles from './styles.module.css';

export function Prop({title}) {
    return <h2 className={styles.title}>Component Prop: {title}</h2>
}