import React, { useState } from 'react';
import hotelData from './hotelData';

const BrowseSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredHotels = hotelData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm) ||
    hotel.location.toLowerCase().includes(searchTerm) ||
    hotel.description.toLowerCase().includes(searchTerm)
  );

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input 
        className="searchbar" 
        placeholder="Search by hotel name, place, description etc." 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <section className="grid hotel-cards">
        {filteredHotels.map(hotel => (
          <article key={hotel.id} className="hotel-card">
            <div className="card-image">
              <p className="chip">{hotel.location}</p>
            </div>
            <p className="text-middle">{hotel.name}</p>
            <p className="text-small">{hotel.description}</p>
            <div className="hotel-card-footer">
              <p className="text-middle">{hotel.rating}</p>
              <p className="text-middle">{hotel.price}</p>
            </div>
            <button className="button secondary">View offer</button>
          </article>
        ))}
      </section>
    </section>
  );
}

export default BrowseSection;
