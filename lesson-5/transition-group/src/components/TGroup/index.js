import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './styles.css'
import { getRandomPostImage } from '../../utils/images'

export default class TGroup extends PureComponent {
  state = {
    images: []
  }

  addImage = () => {
    this.setState({
      images: this.state.images.concat([
        {
          id: new Date().getTime(),
          url: getRandomPostImage()
        }
      ])
    })
  }

  removeImage = () => {
    const images = this.state.images.concat([]);
    images.pop();

    this.setState({images})
  }

  render() {
    return (
      <>
        <button onClick={() => this.addImage()}>
          Add image
        </button>
        <button onClick={() => this.removeImage()}>
          Remove image
        </button>
        <TransitionGroup className="list">
        {
          this.state.images.map(image => (
            <CSSTransition
              key={image.id}
              timeout={500}
              classNames="item">
              <img src={image.url} className="item"/>
            </CSSTransition>
          ))
        }
        </TransitionGroup>
      </>
    )
  }
}
