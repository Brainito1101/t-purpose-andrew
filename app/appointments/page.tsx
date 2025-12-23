import React from 'react';

const AppointmentPage = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Book an Appointment</h1>
      <p>Please use the calendar below to schedule your appointment.</p>

      <div style={{ width: '100%', height: '800px', marginTop: '2rem' }}>
        <iframe
          src="https://youragency.gohighlevel.com/widget/booking/abc123" // replace with your actual GoHighLevel embed link
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 'none' }}
          title="Appointment Booking"
          allow="fullscreen"
        ></iframe>
      </div>
    </main>
  );
};

export default AppointmentPage;