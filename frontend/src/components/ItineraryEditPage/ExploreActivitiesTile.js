import React from 'react';

export function ExploreActivitiesTile({activity}) {


    return (
        <div className='popular-activity-container'>
            <img src={activity.url} style={{ width: '100%', height: '150px', borderRadius: '10px'}} />
            <div className='popular-activity-name'>{activity.name}</div>
        </div>
    );
}
