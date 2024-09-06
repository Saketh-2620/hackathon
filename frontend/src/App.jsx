import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateChallenge from "./pages/Create";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge/create" element={<CreateChallenge />} />
    </Routes>
  );
};

export default App;
