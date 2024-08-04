import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
