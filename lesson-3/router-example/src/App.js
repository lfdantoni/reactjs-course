import React from 'react';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

const styles = {
  active: {
    color: "red"
  },
  link: {
    marginLeft: "20px"
  }
}

function App() {
  return (
    // <BrowserRouter>
    <HashRouter> {/* routes are like mipage.com/#/login */}
      <ul>
        <ListItemLink to="/login" />
        <ListItemLink to="/noticias" />
      </ul>

      <Link to="/contacto">Contacto</Link> {/* that represents a simple link */}

      <NavLink to="/login" style={styles.link} activeStyle={styles.active}>Login</NavLink> {/* that allows to add an active style */}
      <NavLink to="/noticias" style={styles.link} activeStyle={styles.active}>Noticias</NavLink>
      <NavLink to="/redirect" style={styles.link} activeStyle={styles.active}>Redirect</NavLink>
      <NavLink to="/withParam" exact style={styles.link} activeStyle={styles.active}>Without Param</NavLink> {/* Add exact prop to avoid activeStyle in the '/withParam/lfdantoni' path   */}
      <NavLink to="/withParam/lfdantoni" style={styles.link} activeStyle={styles.active}>With Param</NavLink>
      <NavLink to="/asdwer" style={styles.link} activeStyle={styles.active}>No Match</NavLink>

      <Switch> {/* this allows to put a default component */}
        <Route path="/contacto" component={Contacto} /> {/* that component will load a component to a specific path */}
        <Route path="/login" component={Login} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/redirect" component={RedirectToHome} />
        <Route path="/withParam" exact component={WithoutParam} /> {/* exact avoid to show that route for /withParam/:user path*/}
        <Route path="/withParam/:user" component={WithParam} />
        <Route path="/" exact component={Home} /> {/* exact avoid to show that route for the other paths */}
        <Route component={NoMatch} /> {/* this component represent the dafault one, it should be before the Switch finished */}
      </Switch>
    </HashRouter>
    // </BrowserRouter> {/* routes are like mipage.com/login */}
  );
}

export const Contacto = () => {
  return <h1>Contacto</h1>
}

export const Login = () => {
  return <h1>Login</h1>
}

export const Noticias = () => {
  return <h1>Noticias</h1>
}

export const Home = () => {
  return <h1>Pagina de Home</h1>
} 

export const RedirectToHome = () => {
  return <Redirect to="/" />
} 

export const WithoutParam = ({match, location, history}) => {
  return <h1>Without param {match.params.user}</h1>
}

export const WithParam = ({match, location, history}) => {
  return <h1>With param {match.params.user}</h1>
}

export const ChildrenProp = ({match}) => {
  return <h1 style={match ? styles.animate : {marginLeft: 0}}>Pagina de Children Prop</h1>
}

export const RenderProp = ({match}) => {
  return <h1> Pagina de Render Prop</h1>
}

export const NoMatch = () => {
  return <h1>NoMatch!</h1>
}


/* children and render props */
export const ListItemLink = ({ to, ...rest }) => (
  /* children allows to pass some props to the route component and not re-mount a function component and re-render for each path change */
  /* children allows to pass some props to the route component and not re-mount a function component */

  /* If we use render instead of children prop, it will only render when match the path */
  /* change to render prop and seeing what happens when change the links */
  <Route
    path={to}
    children={({ match }) => (
      <li style={match ? styles.active : null}>
        <h3>{to}</h3>
      </li>
    )}
  />
);

export default App;
