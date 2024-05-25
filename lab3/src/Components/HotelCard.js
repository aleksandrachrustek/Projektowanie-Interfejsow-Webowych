import React from 'react';

const HotelCard = ({ city, name, description, rating, price }) => {
    return (
        <article className="hotel-card">
            <div className="card-image">
                <p className="chip">{city}</p>
            </div>
            <p className="text-middle">{name}</p>
            <p className="text-small">{description}</p>
            <div className="hotel-card-footer">
                <p className="text-middle">{rating}</p>
                <p className="text-middle">{price}</p>
            </div>
            <button className="button secondary">View offer</button>
        </article>
    );
};

export default HotelCard;