import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import DocsPage from "@/pages/docs";
import CalendarPage from "@/pages/calendar";
import PricingPage from "@/pages/pricing";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:4000/api");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
