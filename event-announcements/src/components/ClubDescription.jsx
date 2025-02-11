import React, { useState } from "react";

const ClubDescription = () => {
  const [description, setDescription] = useState(
    "Welcome to our club! Here, we share our events and activities."
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div>
      <h2>Club Description</h2>
      {isEditing ? (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p>{description}</p>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default ClubDescription;
