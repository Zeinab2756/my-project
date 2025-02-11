import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import ClubDescription from "./components/ClubDescription";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Club Event Announcements</h1>
      <ClubDescription />
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
