import React, { useState } from "react";

const ClubProfile = () => {
  const [clubImage, setClubImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setClubImage(file);
      setPreview(URL.createObjectURL(file)); // Show image preview before upload
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>My Awesome Club</h2>
      
      {/* Profile Image */}
      {preview ? (
        <img
          src={preview}
          alt="Club Profile"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />
      ) : (
        <p>No profile picture uploaded.</p>
      )}
      
      {/* Upload Button */}
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default ClubProfile;
