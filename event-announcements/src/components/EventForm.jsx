import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // ✅ Generate URL
      setPhoto(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !time) return;

    const scheduledDateTime = new Date(`${date}T${time}`);

    addEvent({
      title,
      description,
      date,
      time,
      scheduledDateTime,
      availableSeats,
      photo, // ✅ Save the generated image URL
    });

    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setAvailableSeats(0);
    setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
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
        type="number"
        placeholder="Available Seats"
        value={availableSeats}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setAvailableSeats(isNaN(value) || value < 0 ? 0 : value);
        }}
        min="0"
        required
      />
      {/* ✅ Upload Image */}
      <input type="file" onChange={handlePhotoChange} accept="image/*" />

      <button type="submit">Schedule Announcement</button>
    </form>
  );
};

export default EventForm;
