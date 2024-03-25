import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [appointmentInfo, setAppointmentInfo] = useState({
  name: "",
  contact: "",
  date: "",
  time: "", 
 }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointments(appointmentInfo.name, appointmentInfo.contact, appointmentInfo.date, appointmentInfo.time);

    // clear form fields after submission
    setAppointmentInfo({
      name: "",
      contact: "",
      date: "",
      time: "",
    });
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          values={appointmentInfo}
          handleChange={(event) => setAppointmentInfo({ ...appointmentInfo, [event.target.name]: event.target.value })}
          onSubmit={handleSubmit}
          contacts={contacts} // Pass contacts list for selection 
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};