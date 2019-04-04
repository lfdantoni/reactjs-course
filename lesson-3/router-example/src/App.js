import React, { Component, Fragment } from 'react';
// import './App.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NewReleases from '@material-ui/icons/NewReleases';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect} from 'react-router-dom';
import { Grid, TextField } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <HashRouter> {/* routes are like mipage.com/#/login */}
        <Link to="/contacto">Contacto <AccountCircle /> </Link> {/* that represents a simple link */}

        <NavLink to="/login" activeStyle={{ color: "red" }}>Login</NavLink> {/* that allows to add an active style */}
        <NavLink to="/noticias" activeStyle={{ color: "pink" }}>Noticias <NewReleases /></NavLink>
        <NavLink to="/redirect">Redirect</NavLink>
        <NavLink to="/withParam/lfdantoni">With Param</NavLink>
        <NavLink to="/childrenProp">With Children</NavLink>

        <Switch> {/* this allows to put a default component */}
          <Route path="/contacto" component={Contacto} /> {/* that component will load a component to a specific path */}
          <Route path="/login" component={Login} />
          <Route path="/noticias" component={Noticias} />
          <Route path="/redirect" component={RedirectToHome} />
          <Route path="/withParam/:user" component={WithParam} />
          <Route path="/childrenProp" render={(props) => <ChildrenProp config={3} {...props}/>} /> {/* render/children allows to pass some props to the route component */}
          <Route component={Home} /> {/* this component represent the dafault one */}
        </Switch>
      </HashRouter>
      // </BrowserRouter> {/* routes are like mipage.com/login */}
    );
  }
}

export const Contacto = () => {
  return (
    <Grid spacing={16} container>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <h1>Pagina de Contacto</h1>
      </Grid>
      
      <Grid item xs={6}>
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="standard-message"
          multiline
          rows="4"
          rowsMax="4"
          label="Message"
          margin="normal"
        />
      </Grid>
    </Grid>);
} 
export const Login = () => {
  return <h1>Pagina de Login</h1>
}
export const Noticias = () => {
  return <h1>Pagina de Noticias</h1>
} 
export const Home = () => {
  return <h1>Pagina de Home</h1>
} 
export const RedirectToHome = () => {
  return <Redirect to="/home" />
} 
export const WithParam = ({match, location, history}) => {
  return <h1>With param {match.params.user}</h1>
}
export const ChildrenProp = () => {
  return <h1>Pagina de Children Prop</h1>
}

export default App;
