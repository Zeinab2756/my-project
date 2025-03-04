import React, { useState } from "react";
import ClubDescription from "./components/ClubDescription.jsx";
import EventList from "./components/EventList.jsx";
import EventForm from "./components/EventForm.jsx";

const App = () => {
  const [events, setEvents] = useState([]);
  const [clubDescription, setClubDescription] = useState("Welcome to our club! This is the default description.");

  // Add new event & sort by date
  const addEvent = (event) => {
    const updatedEvents = [...events, event];
    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    setEvents(updatedEvents);
  };

  // Delete an event with confirmation
  const deleteEvent = (index) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = events.filter((_, i) => i !== index);
      setEvents(updatedEvents);
    }
  };

  // Update club description
  const updateDescription = (newDescription) => {
    setClubDescription(newDescription);
  };

  return (
    <div>
      <h1>Club Event Announcements</h1>

      {/* Club Description Section */}
      <ClubDescription description={clubDescription} updateDescription={updateDescription} />

      <h2>Add New Announcement</h2>
      <EventForm addEvent={addEvent} />

      <h2>Upcoming Events (Sorted by Date)</h2>
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
