import React from 'react'
import { connect } from './Context'

class _Container extends React.PureComponent {
  render() {
    return <>
      Random {this.props.containerRandom}
      <br />
      Test {this.props.test}
      <br />
      <button onClick={this.props.updateRandom}>Update random</button>
    </>
  }
}

const mapStateToProps = (state, props) => {
  console.log('mapStateToProps props', props)

  return {
    containerRandom: state.random,
  }
}

const mapDispatchToProps = (dispatchers, props) => {
  console.log('mapDispatchToProps props', props)

  return {
    updateRandom: dispatchers.updateRandom,
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(_Container);

export { Container }