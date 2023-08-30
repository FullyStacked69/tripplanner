import React from 'react';
import './ItineraryEditPage.css';
import Places from '../Maps/Maps';

const ItineraryEditPage = () => {
    return (
        <div className='page-content-container'>
            <div id='itinerary-section-container'>
                <div id='sidebar'>Sidebar</div>
                <div id='itinerary-section-content'>
                    <h1>Trip to Iceland</h1>
                    <button>Share</button>
                </div>

            </div>
            <div id='map-section-container'>
                <p>Map section</p>
                <Places />

            </div>
            
        </div>
    );
};

export default ItineraryEditPage;