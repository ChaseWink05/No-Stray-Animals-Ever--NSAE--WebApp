import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import VolunteerSignup from "./components/VolunteerSignup";
//import Login from "./components/Login";
import Messages from "./components/Messages";
//import Reports from "./components/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<VolunteerSignup />} />
      
        <Route path="/messages" element={<Messages />} />
        
      </Routes>
    </Router>
  );
}

export default App;
