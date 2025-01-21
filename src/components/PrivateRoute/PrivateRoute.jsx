import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { state } = location || {};
  const { name, studentId } = state || {};

  return name && studentId ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
