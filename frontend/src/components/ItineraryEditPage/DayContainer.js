import React from 'react';
import { ActivityContainer } from './ActivityContainer';

export function DayContainer({ day, index }) {
    const radioId = `radio${index}`;

    return (
        <div className='day-container'>
            <input type='radio' id={radioId} name='accordion' />
            <label className='item' htmlFor={radioId}>
                <div className='title'>
                    <div className='day-detail-container'>
                        <h3>{day.date}</h3>

                    
                        <h5>{day.places} places</h5>
                    </div>
                </div>
                <div className='content'>
                    <div className='content-container'>
                        <input placeholder='You dont have a place to stay yet!'></input>
                        <ActivityContainer />
                        <input placeholder='Add activities for your trip here'></input>
                        <div>

                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}
