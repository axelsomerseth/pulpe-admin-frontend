import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" bg="light">
        <Container fluid className="justify-content-md-center">
          <Row>
            <Col>
              <span className="text-muted">
                Made with love remotely &#x1FAF6;
              </span>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
