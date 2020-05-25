import React, { PureComponent } from 'react'
import { getPosts } from '../../apis/posts.api'
import PostCard from './PostCard';
import styles from './styles.module.css';
import { getRandomPostImage } from '../../utils/images';
import { randomDate } from '../../utils/dates';

export default class PostList extends PureComponent {
  state = {
    posts: []
  }

  fillMissInfo = (posts) => {
    posts.map(post => {
      post.image = getRandomPostImage();
      post.date = randomDate(new Date(2018, 0, 1), new Date());
      return post;
    })
  }

  getLoadingView() {
    return <div>Loading...</div>;
  }

  getListView() {
    return this.state.posts
            .map(post => 
              <PostCard key={post.id} post={post} parentClass={styles['list-item']}/>);
  }

  componentDidMount() {
    getPosts()
      .then(posts => {
        this.fillMissInfo(posts);
        this.setState({posts})
      })
  }

  render() {
    return (
      <div className={styles.list}>
        {!this.state.posts.length ? this.getLoadingView() : this.getListView()}
      </div>
    )
  }
}
