import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import CalendarPage from "@/pages/calendar";
import PricingPage from "@/pages/pricing";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import ProtectedRoute from "@/components/protectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        }
        path="/calendar"
      />
    </Routes>
  );
}

export default App;
