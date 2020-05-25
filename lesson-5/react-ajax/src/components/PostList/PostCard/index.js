import React from 'react';
import styles from './styles.module.css';

export default function PostCard({post, parentClass}) {
  return (
    <div className={parentClass}>
      <a href="#" className={styles['card-link']}>
        <figure className={styles['card-figure']} style={{backgroundImage: `url('${post.image}')`}}>
          <div className={styles.date}>
            <span className={styles['card-date-day']}>{post.date.getDate()}</span>
            <span className={styles['card-date-month']}>{post.date.toLocaleString('default', { month: 'short' })}</span>
          </div>
          <figcaption className={styles['card-figcaption']}>
            <h4>
              <span>{post.title}</span>
            </h4>
            <p>{post.body}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}
