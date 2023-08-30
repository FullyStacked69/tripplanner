import React, { useState } from 'react';
import { ActivityContainer } from './ActivityContainer';

export function DayContainer({ day, index }) {
    const [isOpen, setIsOpen] = useState(false);

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
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
