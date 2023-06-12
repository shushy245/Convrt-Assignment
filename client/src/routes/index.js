import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Homepage from './Homepage';
import { useUser } from '../providers/UserProvider';

const Routes = () => {
    const { userID } = useUser();

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Homepage} isAuthenticated={!!userID} />
                <Redirect to="/login" />
            </Switch>
        </BrowserRouter>);
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => (
    <Route
        {...props}
        render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default Routes;