import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { UserContext } from "../App";

function CustomNavbar() {
  // UserContext: used for basic authentication.
  const { user, setUser } = useContext(UserContext);

  const [showSignInModal, setShowSignInModal] = useState(false); // Register
  const [showSignUpModal, setShowSignUpModal] = useState(false); // Log in

  const location = useLocation();

  const handleSignOut = () => {
    // Remove user from local storage to log user out.
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleSignInShow = () => {
    setShowSignInModal(true);
  };

  const handleSignUpShow = () => {
    setShowSignUpModal(true);
  };

  useEffect(() => {
    if (user) {
      setShowSignInModal(false);
      setShowSignUpModal(false);
    } else {
      if (location.pathname === "/sign-in") {
        setShowSignInModal(true);
      } else if (location.pathname === "/sign-up") {
        setShowSignUpModal(true);
      } else {
        setShowSignInModal(false);
        setShowSignUpModal(false);
      }
    }
  }, [location, user]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to={"/"}>
              Pulpe Admin
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={"/categories"}>
                Categories
              </NavLink>
              <NavLink className="nav-link" to={"/products"}>
                Products
              </NavLink>
              <NavLink className="nav-link" to={"/transactions"}>
                Transactions
              </NavLink>
            </Nav>
            <Container>
              <Row className="justify-content-lg-center" auto="true">
                <Col
                  sm={8}
                  lg={8}
                  className="d-flex justify-content-lg-end pt-1 pb-1 ps-0"
                >
                  <Form className="d-flex me-2" role="search">
                    <Form.Group>
                      <Form.Control
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Button
                        variant="outline-light"
                        type="submit"
                        className="ms-2"
                      >
                        Search
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
                {user ? (
                  <>
                    <Col
                      sm={2}
                      lg={2}
                      className="d-flex justify-content-lg-center pt-1 pb-1 ps-0 pe-0"
                    >
                      <Button variant="info" className="me-2">
                        Profile
                      </Button>
                    </Col>
                    <Col
                      sm={2}
                      lg={2}
                      className="d-flex justify-content-lg-center pt-1 pb-1 ps-0 pe-0"
                    >
                      <Button variant="warning" onClick={handleSignOut}>
                        Sign out
                      </Button>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col
                      sm={2}
                      lg={2}
                      className="d-flex justify-content-lg-center pt-1 pb-1 ps-0 pe-0"
                    >
                      <Link
                        className="btn btn-success me-2"
                        onClick={handleSignInShow}
                        to="sign-in"
                      >
                        Sign in
                      </Link>
                    </Col>
                    <Col
                      sm={2}
                      lg={2}
                      className="d-flex justify-content-lg-center pt-1 pb-1 ps-0 pe-0"
                    >
                      <Link
                        className="btn btn-secondary"
                        onClick={handleSignUpShow}
                        to="sign-up"
                      >
                        Sign up
                      </Link>
                    </Col>
                  </>
                )}
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
        <SignUpModal show={showSignUpModal} setShow={setShowSignUpModal} />
        <SignInModal show={showSignInModal} setShow={setShowSignInModal} />
      </>
    </>
  );
}

export default CustomNavbar;
