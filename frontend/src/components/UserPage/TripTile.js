import React, { useState } from 'react';

export default function TripTile({trip}) {

    const { startDate, length } = trip;
    const start = new Date(startDate);

    const end = new Date(startDate);
    end.setDate(end.getDate() + length - 1);

    const formattedStartDate = formatDate(start);
    const formattedEndDate = formatDate(end);

    function formatDate(dateObj) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    }

    return (
        <div className='trip-container'>
            <div className='trip-img-container'>
                <img></img>
            </div>
            <div className='trip-details'>
                <h4>{trip.title}</h4>
                <p>{`${formattedStartDate} - ${formattedEndDate}`}</p>
            </div>
        </div>
    );
}
