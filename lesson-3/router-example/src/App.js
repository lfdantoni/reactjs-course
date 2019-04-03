import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <HashRouter> {/* routes are like mipage.com/#/login */}
        <Link to="/contacto">Contacto</Link> {/* that represents a simple link */}

        <NavLink to="/login" activeStyle={{ color: "red" }}>Login</NavLink> {/* that allows to add an active style */}
        <NavLink to="/noticias" activeStyle={{ color: "pink" }}>Noticias</NavLink>

        <Switch> {/* this allows to put a default component */}
          <Route path="/contacto" component={Contacto} /> {/* that component will load a component to a specific path */}
          <Route path="/login" component={Login} />
          <Route path="/noticias" component={Noticias} />
          <Route component={Home} /> {/* this component represent the dafault one */}
        </Switch>
      </HashRouter>
      // </BrowserRouter> {/* routes are like mipage.com/login */}
    );
  }
}

export const Contacto = () => {
  return <h1>Pagina de Contacto</h1>
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

export default App;
