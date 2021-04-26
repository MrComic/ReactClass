import React, { useContext, useState } from "react";
import { Card, Col, Container, Button, Form, Row } from "react-bootstrap";
import styles from "./Login.Module.css";
import { AuthContext } from "../../Contexts/AuthContext";
import HttpRequest from "../../Interceptors/AxiosInstance";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const [fields, setFields] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [token, settoken] = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    HttpRequest({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      headers: {
        public: "true",
        "content-type": "application/json",
        accept: "applicaiton/json",
      },
      data: fields,
    }).then(
      (res) => {
        if (res.status == 200) {
          setloading(false);
          if (res.data && res.data.token) {
            localStorage.setItem("token", res.data.token);
            settoken(res.data.token);
            history.replace(from);
          } else {
            setmessage(res.data.msg);
          }
        } else {
          setmessage("error reaching auth server");
        }
      },
      (error) => {
        setloading(false);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <div className={styles.LoginBackground}>
      <Container>
        <Row className={styles.centered}>
          {loading == false ? (
            <Col lg="6" md="6" sm="9" xs="12" className={styles.HCenterd}>
              <Card>
                <Card.Body>
                  <h5>Login</h5>
                  <hr />

                  {message != "" ? (
                    <div className="alert alert-danger">{message}</div>
                  ) : null}

                  <form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={fields.username}
                        name="username"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        value={fields.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <div className="loader"></div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Login;
