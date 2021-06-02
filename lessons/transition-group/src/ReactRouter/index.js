import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

export default class ReactRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/link1">Link 1</Link>
        <Link to="/link2">Link 2</Link>

        <Route path="/link1" children={(props) => <TransitionPage in={!!props.match}> <Link1Component {...props}/> </TransitionPage>} />
        <Route path="/link2" children={(props) => <TransitionPage in={!!props.match}> <Link2Component {...props}/> </TransitionPage>} />
      </BrowserRouter>
    )
  }
}

class TransitionPage extends PureComponent {
  state = {
    show: false
  }


  componentDidUpdate() {
    this.setState({show: this.props.in});
  }

  componentDidMount() {
    this.setState({show: this.props.in});
  }


  render() {
    const { children } = this.props;

    return <div className="tpage-wrapper">
      <CSSTransition in={this.state.show} timeout={300} classNames="tpage" unmountOnExit>
        <div className="tpage">
          {children}
        </div>
      </CSSTransition> 
    </div>
  }
 
}

const Link1Component = () => {
  return (
    <div className="wrapper">Link1Component</div>
  )
}

const Link2Component = () => {
  return (
    <div className="wrapper red">Link2Component</div>
  )
}