import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
  

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const predefinedCredentials = {
    ceo: { email: "ceo@example.com", password: "ceopassword", route: "/ceo" },
    handler: { email: "handler@example.com", password: "handlerpassword", route: "/handler" },
    volunteers: { email: "volunteer@example.com", password: "123", route: "/volunteer" },
    boardMembers: { email: "boardmember@example.com",password: "1233", route: "/boardMembers" },
    hr : { email: "hr@example.com", password: "hrpassword", route: "/hr" },
    caregivers : { email: "caregivers@example.com", password: "caregiverspassword", route: "/caregivers" },
    headcaregivers : { email: "headcare@example.com", password: "headcarepassword", route: "/headcare" },
  };

  const handleLogin = () => {
    const user = Object.values(predefinedCredentials).find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate(user.route);
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
      <button onClick={() => navigate("/Home")}>Home</button>
    </div>
  );
}

export default Login;