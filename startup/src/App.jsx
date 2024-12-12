import { Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "@/pages/index";
import AboutPage from "@/pages/AboutPage";
import PricingPage from "@/pages/PricingPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import CalendarPage from "@/pages/CalendarPage";
import NavBar from "@/components/navbar";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AuthenticatedUserRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth, logout, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route
          path="/signup"
          element={
            <AuthenticatedUserRoute>
              <SignUpPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthenticatedUserRoute>
              <LoginPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <ProtectRoute>
              <CalendarPage />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
