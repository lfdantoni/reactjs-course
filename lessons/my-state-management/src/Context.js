import React from 'react'

let globalState = {
  random: 0
}

const listeners = [];

const subscribe = (fn) => listeners.push(fn);

const unsubscribe = (fn) =>{
  const idx = listeners.indexOf(fn);
  if(idx) {
    listeners.splice(idx);
  }
}

const changeGlobalState = (changes) => {
  globalState = {
    ...globalState,
    ...changes
  }

  listeners.forEach(fn => fn())
}

export const connect = (mapStateToProps, mapDispatchToProps) => (component) => {
  return class extends React.PureComponent {
    state = globalState;

    dispatchers = {}

    constructor(props) {
      super(props);

      this.dispatchers = {
        updateRandom: this.updateRandom
      }
    }

    updateRandom = () => {
      changeGlobalState({random: Date.now()})
      this.setState({random: Date.now()})
    }

    handleGlobalChange = () => {
      this.setState(globalState)
    }

    componentDidMount() {
      subscribe(this.handleGlobalChange);
    }

    componentWillUnmount() {
      console.log('componentWillUnmount')
      unsubscribe(this.handleGlobalChange);
    }

    render() {
      const stateToProps = mapStateToProps ? mapStateToProps(this.state, this.props) : {};
      const dispatchersToProps = mapDispatchToProps ? mapDispatchToProps(this.dispatchers, this.props) : {};
      const Component = component;

      return (
        <Component
          {...this.props}
          {...stateToProps}
          {...dispatchersToProps}
        />
      )
    }
  }
}