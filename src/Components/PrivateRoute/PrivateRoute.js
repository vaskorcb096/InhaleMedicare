import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email || sessionStorage.getItem('jwtoken'))? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
      }
    />
    );
};

export default PrivateRoute;