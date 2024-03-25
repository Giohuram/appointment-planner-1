import React from "react";

export const ContactPicker = ({ contacts, handleChange, value, name }) => {
  return (
    <select value={value} onChange={handleChange} name={name}>
      <option value="">No Contact Selected</option>
      {contacts?.map((contact) => (
        <option key={contact} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};

export default ContactPicker;

