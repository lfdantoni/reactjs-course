import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Grid from '@material-ui/core/Grid';
import Messages from './components/Messages';
import ChatInput from './components/ChatInput';

class App extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Toolbar />
        </Grid>
        <Grid item xs={12}>
          <Messages />
        </Grid>
        <Grid item xs={12}>
          <ChatInput />
        </Grid>
      </Grid>
    );
  }
}

export default App;
