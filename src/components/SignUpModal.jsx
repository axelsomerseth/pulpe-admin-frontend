import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "./Alert.jsx";
import { signUp } from "../services/auth";
import { UserContext } from "../App";

function SignUpModal(props) {
  const { show, setShow } = props;

  // UserContext: used for basic authentication.
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    signUp(username, password)
      .then((response) => {
        setUser(response);
        // console.log(response);
        setAlertMessage(() => "");
        resetForm();
      })
      .catch((error) => {
        setAlertMessage(() => error.message);
        setAlertType(() => "danger");
        console.error(error);
      });
  };

  const resetForm = () => {
    setUsername(() => "");
    setPassword(() => "");
    setAlertMessage(() => "");
  };

  const handleClose = () => {
    resetForm();
    setShow(false);
    navigate("/");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username (Email address)</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your username | email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModal;
