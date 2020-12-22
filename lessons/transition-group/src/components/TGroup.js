import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getRandomPostImage } from '../utils/images';
import './tgroup.css';

export default class TGroup extends PureComponent {
  state = {
    images: []
  }

  addImage = () => {
    this.setState(state => ({
      images: state.images.concat([
        {
          id: new Date().getTime(),
          url: getRandomPostImage()
        }
      ])
    }))
  }

  removeImage = () => {
    const images = this.state.images.concat([]);
    images.pop();

    this.setState({images});
  }

  render() {
    return (
      <>
        <button onClick={this.addImage}>
          Add Image
        </button>
        <button onClick={this.removeImage}>
          Remove Image
        </button>
        <br />
        <TransitionGroup className="list">
        {
          this.state.images.map(image => (
            <CSSTransition
              key={image.id}
              timeout={500}
              classNames="item"
            >
              <img src={image.url} className="item"/>
            </CSSTransition>
          ))
        }
        </TransitionGroup>
        
      </>
    )
  }
}
