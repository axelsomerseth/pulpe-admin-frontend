import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";

// * Higher-Order Component: https://reactjs.org/docs/higher-order-components.html
// * Request Progress State Machine: https://redux.js.org/tutorials/essentials/part-5-async-logic#loading-state-for-requests
// Inspired by: https://www.smashingmagazine.com/2020/06/higher-order-components-react/#use-cases
function WithRequestProgress(WrappedComponent) {
  return function WithRequestProgressComponent({ status, error, ...props }) {
    // TODO: migrate this markup to react-bootstrap.
    switch (status) {
      case "idle":
        return (
          <Col className="d-flex justify-content-center mt-5">
            <h1 className="h1">Being inactive.</h1>
          </Col>
        );
      case "loading":
        return (
          <Col md={12} sm={12} className="d-flex justify-content-center">
            <Spinner animation="border" role="status"></Spinner>
          </Col>
        );
      case "succeeded":
        return <WrappedComponent {...props} />;
      case "failed":
        return (
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        );
      default:
        return (
          <Col className="d-flex justify-content-center mt-5">
            <h1 className="h1">No data.</h1>
          </Col>
        );
    }
  };
}

export default WithRequestProgress;
