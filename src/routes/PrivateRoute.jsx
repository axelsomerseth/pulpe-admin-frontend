import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const location = useLocation();

  // TODO: change Navigate element to hook implementation
  return user ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

export default PrivateRoute;
