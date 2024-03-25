import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

// Assuming these props are passed from the parent component
export const ContactsPage = ({ contacts, addContact }) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate name before adding
    if (!isDuplicate) {
      addContact(contactInfo.name, contactInfo.phone, contactInfo.email);
      setContactInfo({ name: "", phone: "", email: "" }); // Clear form
    }
  };

  // Check for duplicate name on every change
  useEffect(() => {
    if (contacts) { // Prevent error if contacts is undefined
      const isExistingContact = contacts.some(
        (contact) => contact.name === contactInfo.name
      );
      setIsDuplicate(isExistingContact);
    }
  }, [contacts, contactInfo.name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          values={contactInfo}
          handleChange={(event) =>
            setContactInfo({ ...contactInfo, [event.target.name]: event.target.value })
          }
          onSubmit={handleSubmit}
          isDuplicate={isDuplicate} // Pass duplicate state for UI feedback
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};

export default ContactsPage;
