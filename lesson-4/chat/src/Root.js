import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, HashRouter, Route } from 'react-router-dom';
import routes from "./routes";
import { setSettingId, setNickname } from './actions';

const rootStyles = {
    active: {
        fontWeight: "bold",
        color: "red"
    },
    link: {
        marginLeft: "20px"
    }
}

export class _Root extends Component {
    componentDidMount() {
        fetch('https://lfdantoni.herokuapp.com/api/settings?email='+this.props.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            this.props.setNickname(data.nickname);
            this.props.setSettingId(data._id);
        })
    }

    render() {
        return (<HashRouter>
            {routes.map(route => 
                <NavLink key={route.path} to={route.path} activeStyle={rootStyles.active} style={rootStyles.link}>{route.title}</NavLink>
            )}

            <Switch>
                {routes.map(route => 
                    <Route exact={route.exact} key={route.path} path={route.path} component={route.component} />
                )}
            </Switch>
        </HashRouter>)
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.settings.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNickname: (nickname) => dispatch(setNickname(nickname)),
        setSettingId: (id) => dispatch(setSettingId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(_Root);

