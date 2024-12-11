import React, { useState } from "react";
import tinycolor from 'tinycolor2';
import "./RegisterForm.css";

export const Registerform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [color, setColor] = useState("");
  const [validationResults, setValidationResults] = useState({
    nameValid: true,
    emailValid: true,
    phoneNumberValid: true,
    colorValid: true,
  });

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const validateInputs = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@gmail.com$/;
    const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
    const phoneRegex = /^\d{1,15}$/;

    const emailValid = emailRegex.test(email);
    const nameValid = nameRegex.test(name);
    const phoneNumberValid = phoneRegex.test(phoneNumber);

    setValidationResults({
      nameValid,
      emailValid,
      phoneNumberValid,
      colorValid: tinycolor(color).isValid(),
    });
  };

  const show = () => {
    if (email.trim() !== "" || name.trim() !== "" || phoneNumber.trim() !== "") {
      document.getElementById("msg-box").style.display = "block";
    }
  };

  const clearAll = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setColor("");
    document.getElementById("msg-box").style.display = "none";
  };

  return (
    <>
      <div className="regform">
        <div className="form">
          <h2>Register</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
          {!validationResults.nameValid && (
            <span className="Alert">Name must include at least 1 lowercase and 1 uppercase letter</span>
          )}

          <label htmlFor="Email">Email</label>
          <input id="email" type="email" value={email} onChange={handleEmailChange} />
          {!validationResults.emailValid && (
            <span className="Alert">Invalid Email format</span>
          )}

          <label htmlFor="Ph">Phone Number</label>
          <input
            id="Ph"
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {!validationResults.phoneNumberValid && (
            <span className="Alert">Phone number must be a number with up to 15 digits</span>
          )}

          <label htmlFor="color">Choose Color:(only write color name)</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button
            onClick={() => {
              validateInputs();
              show();
            }}
          >
            Validate
          </button>

          <button className="delete-button" onClick={clearAll}>
            Delete All
          </button>
        </div>

        <div
          className="user-information"
          id="msg-box"
          style={{ backgroundColor: color }}
        >
          <h2 style={{ color: color === "black" ? "white" : "black" }}>User Information</h2>
          <p style={{ color: color === "black" ? "white" : "black" }}>Name: {name}</p>
          <p style={{ color: color === "black" ? "white" : "black" }}>Email: {email}</p>
          <p style={{ color: color === "black" ? "white" : "black" }}>Phone Number: {phoneNumber}</p>
        </div>
      </div>
    </>
  );
};

export default Registerform;
