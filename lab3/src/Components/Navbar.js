import React, { useState } from 'react';
import AddHotelView from './AddHotelView';

const Navbar = () => {
  const [showAddView, setShowAddView] = useState(false);

  const toggleAddView = () => {
    setShowAddView(!showAddView);
  };

  return (
    <nav className="fixed-navigation">
      <ul className="nav-links">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#browse">Find offers</a></li>
        <li><a className="nav-link" href="#" onClick={toggleAddView}>Add new offers</a></li>
        <li><a className="nav-link" href="#">My offers</a></li>
        <li><a className="nav-link" href="#">Favourites</a></li>
        <button className="button primary">Log out</button>
      </ul>
      {showAddView && <AddHotelView onClose={toggleAddView} />} 
    </nav>
  );
};

export default Navbar;
