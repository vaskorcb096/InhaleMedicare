import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    var val=sessionStorage.getItem('userInfo');
    var val2=JSON.parse(val);

    return (
        <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email || val2.email )? (
            
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