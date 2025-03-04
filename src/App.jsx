import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import ClubProfile from "./components/ClubProfile";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, hype: 0 }]); // Initialize hype count to 0
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const uphypeEvent = (index) => {
    const updatedEvents = events.map((event, i) =>
      i === index ? { ...event, hype: (event.hype || 0) + 1 } : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="app-container">
      <h1 className="title">Club Event Announcements</h1>

      <ClubProfile />
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} uphypeEvent={uphypeEvent} />
    </div>
  );
};

export default App;
