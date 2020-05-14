import React from 'react';
import './App.css';
import mock from './mock_data';
import Menu from './components/Menu';
import Header from './components/Header';
import Content from './components/Content';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { PureComponent } from 'react';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default class App extends PureComponent {
  defaultMenuId = "memes";

  state = {
    activeMenu: this.defaultMenuId
  }
  
  menuChanged = (menuId) => {
    console.log('Menu changed: ' + menuId);

    this.setState({activeMenu: menuId});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/** this is to apply the correct theme color */}

        <Container maxWidth={false}>

          <Grid container spacing={2} direction="column">
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Menu menuChange={this.menuChanged} defaultMenuId={this.defaultMenuId} />
            </Grid>
            <Grid item>
              <Content menuSelected={this.state.activeMenu}/>
            </Grid>
          </Grid>

        </Container>
      </ThemeProvider>
    );
  }
}
