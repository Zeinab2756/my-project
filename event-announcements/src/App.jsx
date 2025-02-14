import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import ClubDescription from "./components/ClubDescription";
import ClubProfile from "./components/ClubProfile"; // Ensure this file exists

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

      {/* Club Profile Section */}
      <ClubProfile />

      {/* Club Description */}
      <ClubDescription />

      {/* Event Form for Adding New Events */}
      <EventForm addEvent={addEvent} />

      {/* List of Events with Delete Button */}
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
