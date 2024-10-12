import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{event.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{event.location}</p>
        <p className="text-sm text-gray-600">{event.price}</p>
      </div>
    </div>
  );
}

export default EventCard;
