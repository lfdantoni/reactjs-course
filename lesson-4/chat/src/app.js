import React from 'react';
import {render} from 'react-dom';
import { NavLink, Switch, HashRouter, Route } from 'react-router-dom';
import routes from "./routes";

const rootStyles = {
    active: {
        fontWeight: "bold",
        color: "red"
    },
    link: {
        marginLeft: "20px"
    }
}

const Root = () => {
    console.log(routes)
    return <HashRouter>
        {routes.map(route => 
            <NavLink key={route.path} to={route.path} activeStyle={rootStyles.active} style={rootStyles.link}>{route.title}</NavLink>
        )}

        <Switch>
            {routes.map(route => 
                <Route exact={route.exact} key={route.path} path={route.path} component={route.component} />
            )}
        </Switch>
    </HashRouter>
}

render(
    <Root />,
    document.getElementById('root')
);
