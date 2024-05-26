import React, { useState } from 'react';
import HotelCard from './HotelCard';
import hotelData from './hotelData'; // Import danych hoteli

const BrowseSection = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [sortBy, setSortBy] = useState('name'); // Stan sortowania

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  // Sortowanie funkcją sortującą
  const sortedHotels = hotelData.sort((a, b) => {
    if (sortBy === 'price') {
      return a[sortBy] - b[sortBy];
    } else {
      return a[sortBy].localeCompare(b[sortBy]);
    }
  });

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
        </select>
      </div>
      <section className="grid hotel-cards">
        {sortedHotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
    </section>
  );
}

export default BrowseSection;
