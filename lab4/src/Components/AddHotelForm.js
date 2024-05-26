import React, { useState } from 'react';

const AddHotelForm = ({ onAddHotel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHotel = {
      id: Date.now().toString(), // Use timestamp as a unique ID
      name,
      description,
      location,
      rating: parseFloat(rating),
      price,
      image,
    };
    onAddHotel(newHotel);
    setName('');
    setDescription('');
    setLocation('');
    setRating('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-hotel-form">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} step="0.1" min="0" max="5" required />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </label>
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotelForm;
