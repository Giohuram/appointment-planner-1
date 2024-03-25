import React, { useState } from "react";

export const ContactForm = ({ values, handleChange, onSubmit, isDuplicate }) => {
  // Define error state variables
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(""); // Clear any existing name error
    setEmailError(""); // Clear any existing email error

    let isValid = true; // Flag to track validation

    if (values.name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (!validateEmail(values.email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (isValid) {
      onSubmit(values); // Call the provided onSubmit function with validated data
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isDuplicate && <p className="error">This name already exists!</p>} {/* Display duplicate error (optional) */}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        required
        aria-describedby="name-error" // For screen readers (optional)
      />
      {nameError && <p className="error" id="name-error">{nameError}</p>} {/* Inline name error message */}
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // US phone number format (optional)
        placeholder="XXX-XXX-XXXX" // Placeholder for US format (optional)
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        required
        aria-describedby="email-error" // For screen readers (optional)
      />
      {emailError && <p className="error" id="email-error">{emailError}</p>} {/* Inline email error message */}
      <input type="submit" value="Add Contact" />
    </form>
  );
};

export default ContactForm;
