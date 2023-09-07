import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TripTile({trip}) {


    return (
        <div className='trip-container'>
            <div className='trip-img-container'>
                <img></img>
            </div>
            <div className='trip-details'>
                <h4>{trip.title}</h4>
                <p>{trip.date}</p>
            </div>
        </div>
    );
}
