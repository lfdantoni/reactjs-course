import React from 'react';
import styles from './Message.css';

const Message = ({text}) => {
    return <div className={styles['title']}>{text}</div>
}

export default Message;