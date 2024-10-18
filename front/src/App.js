import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LengthConverter from "./pages/length/LengthConverter";
import WeightConverter from "./pages/weight/WeightConverter";
import TempConverter from "./pages/temperature/TempConverter";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LengthConverter />} />
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/weight" element={<WeightConverter />} />
          <Route path="/temperature" element={<TempConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
