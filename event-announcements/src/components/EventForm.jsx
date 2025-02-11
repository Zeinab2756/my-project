import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !seats) {
      alert("Please fill in all fields");
      return;
    }

    addEvent({ title, description, date, seats, photo });
    setTitle("");
    setDescription("");
    setDate("");
    setSeats("");
    setPhoto("");
  };

  return (
    <div>
      <h2>Add New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="number" placeholder="Available Seats" value={seats} onChange={(e) => setSeats(e.target.value)} />
        <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
