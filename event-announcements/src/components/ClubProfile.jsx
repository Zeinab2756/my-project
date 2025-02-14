import React, { useState } from "react";

const ClubProfile = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Function to handle image upload (dummy function for now)
  const handleUpload = () => {
    if (image) {
      alert("Profile photo updated successfully!");
      // Here you would send 'image' to the server using an API call
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="club-profile">
      <h2>Club Profile</h2>
      
      {/* Display Current Profile Picture */}
      <div className="profile-picture">
        {imagePreview ? (
          <img src={imagePreview} alt="Profile Preview" />
        ) : (
          <img src="/default-club.png" alt="Default Club Profile" />
        )}
      </div>

      {/* File Input for Image Upload */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
      />

      {/* Upload Button */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ClubProfile;
