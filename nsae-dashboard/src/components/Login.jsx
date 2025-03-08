import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [role, setRole] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        switch (role.toLocaleLowerCase()) {
            case "ceo":
                navigate("/ceo");
                break;
            case "handler":
                navigate("/handler");
                break;
            case "volunteer":
                navigate("/volunteer");
                break;
            default:
                alert("Invalid role!");
            
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;