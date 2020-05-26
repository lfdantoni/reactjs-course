import React, { PureComponent } from 'react';
import './App.css';
import FadeTransition from './components/FadeTransition';
import FadeCssTransition from './components/FadeCssTransition';
import TGroup from './components/TGroup';


class App extends PureComponent {

  render() {
    return (
        <>
          <FadeTransition />
          {/* <FadeCssTransition /> */}
          {/* <TGroup /> */}
        </>
      );
    }
}

export default App;
