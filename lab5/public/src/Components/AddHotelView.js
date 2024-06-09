import React, { useState } from 'react';
import hotelData from './hotelData';
import AddHotelForm from './AddHotelForm';

const AddHotelView = () => {
  const [hotels, setHotels] = useState(hotelData);

  const addHotel = (newHotel) => {
    setHotels([...hotels, newHotel]);
  };

  const sortHotelsByPrice = () => {
    const sorted = [...hotels].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceA - priceB;
    });
    setHotels(sorted);
  };

  return (
    <div>
      <AddHotelForm onAddHotel={addHotel} />
      <button onClick={sortHotelsByPrice}>Sort by Price</button>
      <div className="hotel-list">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Price: {hotel.price}</p>
            <img src={hotel.image} alt={hotel.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddHotelView;
