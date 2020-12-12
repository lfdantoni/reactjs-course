import React from 'react'
import { Redirect } from 'react-router';

export class AddBook extends React.PureComponent {
  state = {
    redirect: false
  }

  onAddBookClick = () => {
    // do something

    this.setState({
      redirect: true
    })
  }

  render() {
    const {redirect} = this.state;

    return  (
      redirect ? 
        <Redirect to="/"/> :
        <div>
          AddBook
          <button onClick={this.onAddBookClick}>Save Book</button>
        </div>
    )
  }
}
