import React, { useEffect } from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({dayIdx, itObj, setItObj, info, setInfo, setMarkersPositions, markersPositions, activities, setActivities}) {

    // console.log('info', info)

    const addActivityInfo = () => {
        if (info.name) {
            const newActivity = {
                name: info.name,
                formatted_address: info.formatted_address,
                formatted_phone_number: info.formatted_phone_number,
                place_id: info.place_id,
                rating: info.rating,
                user_ratings_total: info.user_ratings_total,
                imageUrl: info?.photos?.[0].getUrl(),
                lat: info.geometry.location.lat(), 
                lng: info.geometry.location.lng() 
            };

            // Update local activities state
            setActivities(prevActivities => [...prevActivities, newActivity]);

            // Update itObj
            let obj = { ...itObj, days: [...itObj.days] };
            obj.days[dayIdx] = { ...obj.days[dayIdx], activities: [...(obj.days[dayIdx]?.activities || []), newActivity] };
            setItObj(obj);
        }
    }



    
    useEffect(() => {
        addActivityInfo();
    }, [info]);
    
    const clear = (idx, e) => {
        e.preventDefault();
        
        // Logic for removing an activity
        let obj = { ...itObj, days: [...itObj.days] };
        obj.days[dayIdx].activities = obj.days[dayIdx].activities.filter((_, activityIdx) => activityIdx !== idx);
        
        setItObj(obj);
        
        // Logic for removing a marker
        let updatedMarkers = [...markersPositions];
        updatedMarkers.splice(idx, 1);
        setMarkersPositions(updatedMarkers);
    }
    // console.log('activity', info)
    
    return (
        <div className='activity-container'>
            {(itObj.days[dayIdx]?.activities || []).map((activity, idx) => (
                <div key={idx}>
                    <h4>{idx+1}</h4>
                    { activity?.name && <img src={activity?.imageUrl} style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity?.name ?  "" : "Activity Info"}</div>
                    <form>
                        <h3>{activity?.name}</h3>
                        <p>{activity?.formatted_address}</p>
                        <p>{activity?.formatted_phone_number}</p>
                        {activity?.rating && <p>Rating: {activity?.rating}({activity?.user_ratings_total})</p>}
                        <input placeholder='comments'></input>
                        {activity?.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                    </form>
                </div>
            ))}
        </div>
    );
}
