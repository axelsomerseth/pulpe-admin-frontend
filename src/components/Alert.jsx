import React from "react";

function Alert(props) {
  const type = props.type || "info";
  const { message } = props;

  const mustBeRendered = type && message ? true : false;

  const cleanMessageFromFirebase = (message) => {
    const matches = message.match(/\([\w/-]+\)/);
    const code = matches && matches.length ? matches[0] : "";
    switch (code) {
      case "(auth/invalid-email)":
        return "Error: Invalid email.";
      case "(auth/weak-password)":
        return "Error: Weak password.";
      case "(auth/wrong-password)":
        return "Error: Wrong password.";
      case "(auth/network-request-failed)":
        return "Error: Network failed.";
      default:
        const newMessage = message + "";
        return newMessage
          .replace(/Firebase:\s/, "")
          .replace(/\s\([\w/-]+\)/, "");
    }
  };

  return (
    <>
      {mustBeRendered && (
        <div className={`alert alert-${type}`} role="alert">
          <div>{cleanMessageFromFirebase(message)}</div>
        </div>
      )}
    </>
  );
}

export default Alert;
