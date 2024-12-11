import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider"; // Import the useAuth hook

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  console.log(`Logged in`, isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return <>{children}</>; // Render the protected content if authenticated
};

export default ProtectedRoute;
