import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/" exact>
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/product/:id" component={ProductDetail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
