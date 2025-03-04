import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [exclusive, setExclusive] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !date || !time) {
      alert("Please fill in Title, Date, and Time.");
      return;
    }

    const scheduledDate = new Date(`${date}T${time}`);

    addEvent({
      title,
      description,
      date: scheduledDate,
      location,
      exclusive,
      image,
    });

    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
    setExclusive(false);
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={exclusive}
          onChange={() => setExclusive(!exclusive)}
        />
        Exclusive Event
      </label>
      <input
        type="file"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
