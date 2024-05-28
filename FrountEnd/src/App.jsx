import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Buyer from "./components/Buyer";
import Seller from "./components/Seller";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(60, 60, 60)",
        color: "white",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
