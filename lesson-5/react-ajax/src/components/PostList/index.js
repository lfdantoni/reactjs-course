import React, { PureComponent } from 'react'
import { getPosts, addPost } from '../../apis/posts.api'
import PostCard from './PostCard';
import styles from './styles.module.css';
import { getRandomPostImage } from '../../utils/images';
import { randomDate } from '../../utils/dates';
import { Fragment } from 'react';

export default class PostList extends PureComponent {
  state = {
    posts: [],
    title: '',
    userId: '',
    body: ''
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

  handleInput = (e, property) => {
    this.setState({[property]: e.target.value})
  }

  createPost = () => {
    addPost(this.state.userId, this.state.title, this.state.body)
      .then((resp) => {
        console.log(resp);
        this.setState({
          userId: '',
          title: '',
          body: ''
        })
      });
  }

  getCreatePostView() {
    return <div className={styles['create-post']}>
      <input type="text" placeholder="UserId" value={this.state.userId} onChange={(e) => this.handleInput(e, 'userId')}/>
      <input type="text" placeholder="Title" value={this.state.title} onChange={(e) => this.handleInput(e, 'title')}/>
      <input type="text" placeholder="Body" value={this.state.body} onChange={(e) => this.handleInput(e, 'body')}/>
      <button onClick={this.createPost}>Create Post</button>
    </div>
  }

  render() {
    return (
      <div className={styles.list}>
        {this.getCreatePostView()}
        {!this.state.posts.length ? this.getLoadingView() : this.getListView()}
      </div>
    )
  }
}
