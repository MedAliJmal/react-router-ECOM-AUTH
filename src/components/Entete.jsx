import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/action";
import { Link } from "react-router-dom";

const Entete = ({ search, handleSearch }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div style={{ width: "100%" }}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Ecom-F3</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                margin: "0px 5px",
                textDecoration: "none",
                color: "White",
              }}
            >
              Profile
            </Link>
            <Link
              to={
                user.role === "admin" && user.isLoggedIn === true
                  ? "/admin/products"
                  : "/user/products"
              }
              style={{
                margin: "0px 5px",
                textDecoration: "none",
                color: "White",
              }}
            >
              Products
            </Link>
          </Nav>
          {user.isLoggedIn === true ? (
            <div style={{ display: "flex" }}>
              <Form className="d-flex" style={{ margin: "0px 10px" }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={handleSearch}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button variant="danger" onClick={() => dispatch(userLogout())}>
                Logout
              </Button>
            </div>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
