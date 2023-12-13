import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password.toLowerCase() === password.toLowerCase()
    ) {
      dispatch(userLogin());
    } else {
      alert("Wrong Informations");
    }
  };

  return (
    <div>
      {user.isLoggedIn === true ? (
        <Navigate to="/" />
      ) : (
        <div style={{ margin: "50px" }}>
          <h1 style={{ width: "650px" }}>
            You are not logged in please fill the requested fields down below
          </h1>
          <Form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
