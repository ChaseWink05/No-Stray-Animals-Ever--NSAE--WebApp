import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Login from "./components/Login";
import CEOPage from "./components/CEOPage";
import HandlerPage from "./components/Handler";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Footer from "./components/Footer";
import Volunteers from "./components/Volunteers";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/ceo" element={<CEOPage />} />
          <Route path="/handler" element={<HandlerPage />} />
          <Route path="/volunteer" element={<Volunteers />} />
          <Route path= "/volunteer" element={<Volunteers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
