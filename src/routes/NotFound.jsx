import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NotFound() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <h1>Not found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
