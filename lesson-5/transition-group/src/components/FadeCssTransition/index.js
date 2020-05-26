import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './styles.css'

// State classes: http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames
export default class FadeCssTransition extends PureComponent {
  state = {
    show: false
  }

  render() {
    return (
      <>
        <button onClick={() =>this.setState((state) => ({show: !state.show}) )}>
          Click to Enter
        </button>
        <br />
        <CSSTransition timeout={10000} unmountOnExit in={this.state.show} classNames="my-fade" >
          <div className="my-fade">
            <img src={"https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
          </div>
        </CSSTransition>
      </>
    )
  }
}
