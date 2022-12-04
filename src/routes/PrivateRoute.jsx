import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

export default PrivateRoute;
