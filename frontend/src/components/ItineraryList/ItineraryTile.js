import React, { useState } from 'react';

export function ItineraryTile({itinerary}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState()




    return (
        <div className='main-itinerary-container'>
            <div className='item'>
                <div className='title' onClick={() => setIsOpen(!isOpen)}
                        style={{
                            backgroundColor: isOpen || hovered ? "#457B9D" : "transparent",
                            color: isOpen || hovered ? "white" : "#457B9D",
                          }}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                    >
                    <div className='intinerary-detail-container'>
                        <h3>{itinerary.title}</h3>
                        <div className='itinerary-info'>
                            <h4>{itinerary.length} days</h4>
                            <div className='itinerary-details'>
                                <div className='itinerary-detail-container'>
                                    <p>By: {itinerary.author}</p>
                                </div>
                                <div className='itinerary-detail-container'>
                                    {/* <img src="./assets/thumbs-up.png" alt="Thumbs up icon" width="500" height="600" /> */}
                                    <p>{itinerary.likes}</p>
                                </div>
                                <div className='itinerary-detail-container'>
                                    <p>{itinerary.views}</p>
                                </div>
                            </div>
                        </div>          
                    </div>

                    <span className='arrow-icon'>{isOpen ? '\u25b2' : '\u25bc'}</span>
                </div>

                <div className='content' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className='itinerary-content-container'>                  
                            {Object.keys(itinerary.days).map(dayNumber => (
                                <div key={dayNumber}>
                                    <h3>Day {dayNumber}</h3>
                                    <p>{itinerary.days[dayNumber].join(', ')}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
