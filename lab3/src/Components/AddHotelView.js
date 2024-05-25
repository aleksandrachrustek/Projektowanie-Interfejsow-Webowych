import React, { useState } from 'react';
import AddHotelForm from './AddHotelForm';

const BrowseSection = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input 
        className="searchbar" 
        placeholder="Search by hotel name, place, description etc." 
      />
      <button className="button primary" onClick={toggleAddForm}>Add new offers</button>
      {showAddForm && <AddHotelForm onClose={toggleAddForm} />} 
    </section>
  );
}

export default BrowseSection;
