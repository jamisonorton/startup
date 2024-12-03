import { Route, Routes } from "react-router-dom";
import axios from "axios";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import DocsPage from "@/pages/docs";
import CalendarPage from "@/pages/calendar";
import PricingPage from "@/pages/pricing";

axios.defaults.baseURL = "https://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<CalendarPage />} path="/calendar" />
      <Route element={<PricingPage />} path="/pricing" />
    </Routes>
  );
}

export default App;
