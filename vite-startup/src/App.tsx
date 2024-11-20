import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import DocsPage from "@/pages/docs";
import BlogPage from "@/pages/blog";
import PricingPage from "@/pages/pricing";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<PricingPage />} path="/pricing" />
    </Routes>
  );
}

export default App;
