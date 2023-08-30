import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ActivityContainer } from './ActivityContainer';
import { RecommendedActivityTile } from './RecommendedActivityTile';

export function DayContainer({ day, index }) {
    const [isOpen, setIsOpen] = useState(false);
    const sampleActivities = [
        { image: "", name: "Test name 1" },
        { image: "", name: "Test name 2"  },
        { image: "", name: "Test name 3"  },
        { image: "", name: "Test name 4"  },
        { image: "", name: "Test name 5"  },
    ]

    return (
        <div className='day-container'>
            <div className='item' onClick={() => setIsOpen(!isOpen)}>
                <div className='title' 
                     style={{ 
                         backgroundColor: isOpen ? '#457B9D' : 'transparent', 
                         color: isOpen ? 'white' : '#457B9D'
                     }}
                >
                    <div className='day-detail-container'>
                        <h3>{day.date}</h3>                    
                        <h5>{day.places} places</h5>
                    </div>
                    <span className='arrow-icon'>{isOpen ? '\u25b2' : '\u25bc'}</span>
                </div>
                <div className='content' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className='content-container'>
                        <input placeholder='You dont have a place to stay yet!'></input>
                        <ActivityContainer />
                        <input placeholder='Add activities for your trip here'></input>
                        <div id='recommendations-section'>
                            <h5>Recommended places close to your hotel or latest activity</h5>
                            <div id='recommended-activities-container'>
                                {/* Should iterate through recommended activities and run the info through the RecommendedActivityTile component */}
                                {sampleActivities.map((sampleActivity, index) => (
                                    <RecommendedActivityTile  key={index} sampleActivity={sampleActivity} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
