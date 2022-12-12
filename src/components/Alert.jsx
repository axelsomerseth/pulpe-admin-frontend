import React from "react";

const Alert = ({ type = "info", message }) => {
  const mustBeRendered = type && message ? true : false;

  return (
    <>
      {mustBeRendered && (
        <div className={`alert alert-${type}`} role="alert">
          <div id="errorMessage">{message}</div>
        </div>
      )}
    </>
  );
};

export default Alert;
