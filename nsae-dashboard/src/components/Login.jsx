import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import supabase from "../utils/supabaseClient"; // Import Supabase client

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const predefinedCredentials = {
    ceo: { email: "ceo@example.com", password: "ceopassword", route: "/ceo" },
    handler: { email: "handler@example.com", password: "handlerpassword", route: "/handler" },
    Volunteers: { email: "volunteer@example.com", password: "123", route: "/volunteer" },
    // Add more predefined credentials as needed
  };

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) {
      alert("Login failed");
      return;
    }

    const predefinedUser = Object.values(predefinedCredentials).find(
      (user) => user.email === email && user.password === password
    );

    if (predefinedUser) {
      navigate(predefinedUser.route);
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