import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { PureComponent } from 'react';
import MyMemes from './components/MyMemes';
import CreateMeme from './components/CreateMeme';
import MemeList from './components/MemeList';
import { Provider } from 'react-redux';
import {store} from './store';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/** this is to apply the correct theme color */}

            <Container maxWidth={false}>

              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Header />
                </Grid>
                <Grid item>
                  <Menu />
                </Grid>
                <Grid item>
                  <Switch>
                    <Route path="/memes" component={MemeList}/>
                    <Route path={["/create-meme/:id", "/create-meme"]} component={CreateMeme}/>
                    <Route path="/my-memes" component={MyMemes}/>
                    <Route strict path="/" render={() => <Redirect to="/memes"/>}/>
                  </Switch>
                </Grid>
              </Grid>

            </Container>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}
