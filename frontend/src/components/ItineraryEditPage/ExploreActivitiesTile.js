import React from 'react';

export function ExploreActivitiesTile({activity}) {


    return (
        <div className='popular-activity-container'>
            <img src={activity.url}/>
            <div className='popular-activity-name'>{activity.name}</div>
        </div>
    );
}
