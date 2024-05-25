import React, { useState } from 'react';

const AddHotelForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    rating: '',
    price: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: '',
      location: '',
      description: '',
      rating: '',
      price: ''
    });
    onClose();
  };

  return (
    <div className="add-hotel-form">
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
        <label>Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
        <div className="form-buttons">
          <button type="submit" className="button primary">Add Hotel</button>
          <button type="button" className="button secondary" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default AddHotelForm;
