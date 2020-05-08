  
import React, {Fragment} from 'react';
import './App.css';
import { Prop } from './components/Prop';
import { State } from './components/State';

function App() {
  return (
    <Fragment>
      <Prop title="prop test" />
      <State />
    </Fragment>
  );
}

export default App;