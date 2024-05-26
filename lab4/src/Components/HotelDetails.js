import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import hotelData from './hotelData'; // Importuj dane hotelowe

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Znajdź hotel w danych na podstawie id
    const hotel = hotelData.find(hotel => hotel.id === id);
    setHotel(hotel);
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-details">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <p>Location: {hotel.location}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Price: {hotel.price}</p>
      <img src={hotel.image} alt={hotel.name} />
    </div>
  );
};

export default HotelDetails;
