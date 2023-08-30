import React from 'react';
import './ItineraryEditPage.css';
import Places from '../Maps/Maps';

const ItineraryEditPage = () => {
    return (
        <div className='page-content-container'>
            <div id='itinerary-section-container'>
                <div id='sidebar'>Sidebar</div>
                <div id='itinerary-section-content'>
                    <div id='itinerary-tld'>
                        <div id='title-date-container'>
                            <h1>Trip to Iceland</h1>
                            <div>9/9 - 9/16</div>
                        </div>
                        <div id='itinerary-tld-bttns'>
                            {/* <button>Share</button> */}
                            <div></div>
                            <div id='members-container'>
                                <div id='member-icon'>E</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16"> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/> </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='itinerary-container'>
                        <h2>Itinerary</h2>
                    </div>
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