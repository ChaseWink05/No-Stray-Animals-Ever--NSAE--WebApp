import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import VolunteerSignup from "./components/VolunteerSignup";
import Messages from "./components/Messages";
import Login from "./components/Login";
import CEOPage from "./components/CEOPage";
import HandlerPage from "./components/Handler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<VolunteerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/ceo" element={<CEOPage />} />
        <Route path="/handler" element={<HandlerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
