import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
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

  const navigate = useNavigate();

  const canSave = [username, password].every(Boolean);

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

  const handleSignup = async (event) => {
    if (canSave) {
      event.preventDefault();
      try {
        const response = await signUp(username, password);
        setUser(response);
        handleClose();
      } catch (error) {
        console.error("Error trying to signing up: ", error);
        setAlertMessage(() => error.message);
      } finally {
      }
    } else {
      setAlertMessage(() => "Please fill in all required fields.");
    }
  };

  return (
    <section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="signUpForm">
            <Form.Group>
              <Form.Label>Username (Email address)</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
          {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSignup}
            form="signUpForm"
            type="submit"
          >
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default SignUpModal;
