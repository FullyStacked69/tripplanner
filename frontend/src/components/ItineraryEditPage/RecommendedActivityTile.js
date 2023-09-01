import React from 'react';

export function RecommendedActivityTile({sampleActivity}) {


    return (
        <div className='recommended-activity-container'>
            <div id='recommended-details'>
            <img />
            <div className='activity-name'>{sampleActivity.name}</div>
            <div className='add-bttn'>+</div>
            </div>
        </div>
    );
}
