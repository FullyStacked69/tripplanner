import React from 'react';
import './ItineraryEditPage.css';
import Places from '../Maps/Maps';

const ItineraryEditPage = () => {
    return (
        <div className='page-content-container'>
            <div id='itinerary-section-container'>
                <p>Itinerary Edit Section</p>

            </div>
            <div id='map-section-container'>
                <p>Map section</p>
                <Places />

            </div>
            
        </div>
    );
};

export default ItineraryEditPage;