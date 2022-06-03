import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const AuthenticatedRoute = ({ component: RouteComponent, ...rest }) => {
  const { authState } = useContext(AuthContext);
  const userLocal = JSON.parse(localStorage.getItem("user"));

  console.log(!!authState.user || !!userLocal)
  return (
   !!authState.user || !!userLocal ? <Route
      {...rest}
      render={(routeProps) =>
        !!authState.user || !!userLocal ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    /> :  <Redirect to="/" />
  );
};


export default AuthenticatedRoute;