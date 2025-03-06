import React, { useState } from "react";
import "./VolunteerSignup.css";

function VolunteerSignup() {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [town, setTown] = useState("");
  const [image, setImage] = useState("");

  const handleSignup = () => {
    const volunteerData = { name, hobby, town, image };
    localStorage.setItem("volunteer", JSON.stringify(volunteerData));
    alert("Account created! Contact HR for approval.");
  };

  return (
    <div className="signup-container">
      <h2>Become a Volunteer</h2>
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Hobby" onChange={(e) => setHobby(e.target.value)} />
      <input type="text" placeholder="Town" onChange={(e) => setTown(e.target.value)} />
      <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default VolunteerSignup;
