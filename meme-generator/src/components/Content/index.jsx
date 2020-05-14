import React, { Fragment, PureComponent } from 'react'
import MemeList from '../MemeList';
import CreateMeme from '../CreateMeme';
import MyMemes from '../MyMemes';

export default class Content extends PureComponent {
  getView() {
    switch (this.props.menuSelected) {
      case 'memes':
        return <MemeList />
      case 'create-meme':
        return <CreateMeme />
      case 'my-memes':
        return <MyMemes />
      default:
        break;
    }
  }
  render() {
    return (
      <Fragment>
        {
          this.getView()
        }
      </Fragment>
    )
  }
}
