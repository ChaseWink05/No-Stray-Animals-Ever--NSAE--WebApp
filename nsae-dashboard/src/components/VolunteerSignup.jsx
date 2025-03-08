import React, { useState } from "react";
import "../styles/VolunteerSignup.css";
import { Link } from "react-router-dom";

function VolunteerSignup() {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [town, setTown] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");

  const handleSignup = () => {
    const volunteerData = { name, hobby, town, image, bio };
    localStorage.setItem("volunteer", JSON.stringify(volunteerData));
    alert("Account created! Contact HR for approval.");
  };

  return (
    <div className="signup-container">
      <div className="volunteer-form">
        <h2>Become a Volunteer</h2>
        <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Hobby" onChange={(e) => setHobby(e.target.value)} />
        <input type="text" placeholder="Town" onChange={(e) => setTown(e.target.value)} />
        <textarea placeholder="Short Bio" onChange={(e) => setBio(e.target.value)} />
        <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        <button onClick={handleSignup}>Sign Up</button>
        <Link to="/Home">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default VolunteerSignup;