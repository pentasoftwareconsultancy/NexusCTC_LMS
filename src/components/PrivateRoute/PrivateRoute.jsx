// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// function PrivateRoute({ children }) {
//   const location = useLocation();
//   const { state } = location || {};
//   const { name, studentId } = state || {};

//   return name && studentId ? (
//     children
//   ) : (
//     <Navigate to="/" replace />
//   );
// }

// export default PrivateRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
