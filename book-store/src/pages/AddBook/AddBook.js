  
import React from 'react'
import { Redirect } from 'react-router'

export class AddBook extends React.PureComponent {
  state = {
    redirect: false
  }

  onAddBookClick = () => {
    // TODO add book logic

    this.setState({
      redirect: true
    })
  }

  render() {
    return (
      this.state.redirect ? 
        <Redirect to="/" /> :
        <div>
          Add book
          <button onClick={this.onAddBookClick}>Add Book</button>
        </div>
    )
  }
}