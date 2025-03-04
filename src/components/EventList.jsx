import React from "react";

const EventList = ({ events, deleteEvent, uphypeEvent }) => {
  const sortedEvents = [...events].sort((a, b) => b.date - a.date);

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      {sortedEvents.length === 0 ? (
        <p>No events scheduled yet.</p>
      ) : (
        sortedEvents.map((event, index) => (
          <div key={index} className="event-item">
            {event.image && <img src={event.image} alt="Event" className="event-image" />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}{" "}
              at {new Date(event.date).toLocaleTimeString()}
            </p>
            <p><strong>Location:</strong> {event.location}</p>
            {event.exclusive && <p className="exclusive-tag">Exclusive Event</p>}
            
            <div className="event-buttons">
              <button className="uphype-button" onClick={() => uphypeEvent(index)}>
                🔥 Uphype ({event.hype || 0})
              </button>
              <button className="delete-button" onClick={() => deleteEvent(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
