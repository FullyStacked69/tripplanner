import React, { useState } from 'react';

export function ItineraryTile({itinerary}) {
    const [isOpen, setIsOpen] = useState(false);




    return (
        <div className='day-container'>
        <div className='item'>
            <div className='title' onClick={() => setIsOpen(!isOpen)}
                    style={{ 
                        backgroundColor: isOpen ? '#457B9D' : 'transparent', 
                        color: isOpen ? 'white' : '#457B9D'
                    }}
                >
                <div className='intinerary-detail-container'>
                    <h3>{itinerary.title}</h3>
                    <div className='itinerary-info'>
                        <h5>{itinerary.length} days</h5>
                        <div className='itinerary-details'>
                            <p>{itinerary.author}</p>
                            <p>{itinerary.likes}</p>
                            <p>{itinerary.views}</p>
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
