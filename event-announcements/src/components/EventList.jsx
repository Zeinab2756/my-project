import React from "react";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div>
      {events.length === 0 ? (
        <p>No upcoming events.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
            <p><strong>Seats Available:</strong> {event.seats}</p>
            {event.photo && <img src={event.photo} alt="Event" width="100%" />}
            
            {/* Delete Button */}
            <button className="delete-btn" onClick={() => deleteEvent(index)}>
              ❌ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
