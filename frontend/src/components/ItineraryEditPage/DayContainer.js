import React from 'react';

export function DayContainer({ day }) {
    return (
        <div className='day-container'>
            {console.log("days:", day)}
            <div>
                <h3>{day.date}</h3>
                <p>{day.places} places</p>
            </div>
        </div>
    );
}
