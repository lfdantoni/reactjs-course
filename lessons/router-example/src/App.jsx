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
    <BrowserRouter>
    {/* <HashRouter> routes are like mypage.com/#/login */}
      <ul>
        <ListItemLink to="/login" />
        <ListItemLink to="/news" />
      </ul>

      <Link to="/contact">Contact</Link> {/* that represents a simple link */}

      <NavLink to="/login" style={styles.link} activeStyle={styles.active}>Login</NavLink> {/* that allows to add an active style */}
      <NavLink to="/news" style={styles.link} activeStyle={styles.active}>News</NavLink>
      <NavLink to="/redirect" style={styles.link} activeStyle={styles.active}>Redirect</NavLink>

      <NavLink to="/withParam" exact style={styles.link} activeStyle={styles.active}>Without Param</NavLink> {/* Add exact prop to avoid activeStyle in the '/withParam/lfdantoni' path   */}
      <NavLink 
        to={{pathname: '/withParam', state: {test: 1234}}}
        exact
        style={styles.link}
        activeStyle={styles.active}>
          Without Param with state
      </NavLink> {/* you can add a state which can be gotten by the route component's location */}
      <NavLink to="/withParam/lfdantoni" style={styles.link} activeStyle={styles.active}>With Param</NavLink>
      <NavLink to="/asdwer" style={styles.link} activeStyle={styles.active}>No Match</NavLink>

      <Switch> {/* this allows to put a default component */}
        <Route path="/contact" component={Contact} /> {/* that component will load a component to a specific path */}
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route path="/redirect" component={RedirectToHome} />
        <Route path="/withParam" exact component={WithoutParam} /> {/* 'exact' avoids to show WithoutParam instead of WithParam component route */}
        <Route path="/withParam/:user" component={WithParam} />
        <Route path="/" exact component={Home} /> {/* exact avoid to show that route for the other paths */}
        <Route component={NoMatch} /> {/* this component represent the dafault one, it should be before the Switch finished */}
      </Switch>
    {/* </HashRouter> */}
    </BrowserRouter> /* routes are like mypage.com/login */
  );
}

export const Contact = () => {
  return <h1>Contact</h1>
}

export const Login = () => {
  return <h1>Login</h1>
}

export const News = () => {
  return <h1>News</h1>
}

export const Home = () => {
  return <h1>Home Page</h1>
} 

export const RedirectToHome = () => {
  return <Redirect to="/" />
} 

/**
 * match: https://reacttraining.com/react-router/web/api/match
 * location: https://reacttraining.com/react-router/web/api/location
 * history: https://reacttraining.com/react-router/web/api/history
 */
export const WithoutParam = ({match, location, history}) => {
  console.log(location.state)
  console.log(history)
  return <h1>Without param {match.params.user} and state: {JSON.stringify(location.state)}</h1>
}

export const WithParam = ({match, location, history}) => {
  return <h1>With param {match.params.user}</h1>
}

export const NoMatch = () => {
  return <h1>NoMatch!</h1>
}


/**
 * children and render props
 * render: https://reacttraining.com/react-router/web/api/Route/render-func
 * children: https://reacttraining.com/react-router/web/api/Route/children-func
 */
export const ListItemLink = ({ to, ...rest }) => (
  /* children allows to pass some props to the route component and not re-mount a function component and re-render for each path change */
  /* This allows you to dynamically adjust your UI based on whether or not the route matches. It will render whether the path matches or not. */

  /* If we use render instead of children prop, it will only render when match the path */
  /* change to render prop and seeing what happens when change the links */
  <Route
    path={to}
    children={({ match }) => (
      <li style={match ? styles.active : null}>
        <h3 style={{transition: "color 1s", color: match ? "red" : 'black'}}>{to}</h3>
      </li>
    )}
  />
);

export default App;