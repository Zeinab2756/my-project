import React, { useState } from 'react';
import EventList from "./components/EventList.jsx";
import EventForm from "./components/EventForm.jsx";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    const updatedEvents = [...events, event];

    // Sort events by date (earliest first)
    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(updatedEvents);
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1>Club Event Announcements</h1>
      <h2>Add New Announcement</h2>
      <EventForm addEvent={addEvent} />
      <h2>Upcoming Events (Sorted by Date)</h2>
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
