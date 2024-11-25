import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import DocsPage from "@/pages/docs";
import CalendarPage from "@/pages/calendar";
import PricingPage from "@/pages/pricing";
import LoginPage from "@/pages/login";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<CalendarPage />} path="/calendar" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
}

export default App;
