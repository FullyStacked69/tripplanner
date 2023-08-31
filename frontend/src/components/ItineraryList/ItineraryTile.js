import React from 'react';

export function ItineraryTile({itinerary}) {
    




    return (
        <div className='itinerary-container'>
            <li key={itinerary._id}>
                <p>{itinerary.title}</p>
                <p>{itinerary.length}</p>
                <p>{itinerary.author}</p>
                <p>{itinerary.likes}</p>
                <p>{itinerary.views}</p>
            </li>
        </div>
    );
}
