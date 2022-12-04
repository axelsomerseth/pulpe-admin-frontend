import React, { useContext } from "react";
import { UserContext } from "../App";
import { Outlet, Navigate } from "react-router-dom";

// Usage
// <Route element={<PrivateWrapper />}>
// 		<Route path="/dashboard" element={<Dashboard />} />
// </Route>

const PrivateWrapper = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateWrapper;
