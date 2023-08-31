import React, { useState } from 'react';
import thumbsIcon from './assets/thumbs-up.png'

export function ItineraryTile({itinerary}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState()




    return (
        <div className='main-itinerary-container'>
            <div className='item'>
                <div className='itinerary' onClick={() => setIsOpen(!isOpen)}
                        style={{
                            backgroundColor: isOpen || hovered ? "#457B9D" : "#A8DADC",
                            color: isOpen || hovered ? "white" : "#1D3557",
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
                                    <img src={thumbsIcon} alt="Thumbs up icon" width="13" height="15" />
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

                <div className='itinerary-content' style={{ display: isOpen ? 'block' : 'none' }}>
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
