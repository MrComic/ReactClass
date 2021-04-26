import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const [token] = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(token);
        return token != null ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
