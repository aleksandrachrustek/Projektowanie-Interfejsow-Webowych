import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <article className="hotel-card">
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
  );
};

export default HotelCard;
