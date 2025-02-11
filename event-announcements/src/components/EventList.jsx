import React, { useEffect, useState } from "react";

const EventList = ({ events, deleteEvent }) => {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    const checkScheduledPosts = () => {
      const now = new Date();
      const updatedEvents = events.filter(
        (event) => new Date(event.scheduledDateTime) <= now
      );
      setVisibleEvents(updatedEvents);
    };

    checkScheduledPosts();
    const interval = setInterval(checkScheduledPosts, 1000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div>
      <h2>Upcoming Announcements</h2>
      {visibleEvents.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        <ul>
          {visibleEvents.map((event, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Scheduled For:</strong> {event.date} at {event.time}
              </p>
              <p>
                <strong>Available Seats:</strong> {event.availableSeats}
              </p>
              {/* ✅ Display Uploaded Image */}
              {event.photo && (
                <img
                  src={event.photo}
                  alt="Event"
                  width="150"
                  height="150"
                  style={{ borderRadius: "10px", marginTop: "10px" }}
                />
              )}
              {/* ✅ Red Delete Button */}
              <button
                onClick={() => deleteEvent(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  marginTop: "10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
