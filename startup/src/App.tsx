// import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import DocsPage from "@/pages/login";
import CalendarPage from "@/pages/calendar";
import PricingPage from "@/pages/pricing";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

axios.defaults.baseURL = "https://startup.janesmusicstudio.com:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<CalendarPage />} path="/calendar" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
    </Routes>
  );
}

export default App;
