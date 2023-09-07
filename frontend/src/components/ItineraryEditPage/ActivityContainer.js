import React, { useEffect } from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({info, setInfo, setMarkersPositions, markersPositions,activities, setActivities}) {

    const clear = (idx,e) => {
        e.preventDefault();
        const dupAct = [...activities];
        const dupMarker = [...markersPositions]
        const slicedAcc = dupAct.slice(0, idx).concat(dupAct.slice(idx+1))
        const slicedMarker = dupMarker.slice(0, idx).concat(dupMarker.slice(idx+1))

        // setInfo({})
        setMarkersPositions(slicedMarker);
        setActivities(slicedAcc)
    }

    const addActivityInfo = () => {
        if(info.name) {
            setActivities([...activities, info])
        }
    }

    useEffect(() => {
        addActivityInfo();
    },[info])





    return (
        <div className='activity-container'>
            {activities.map((activity, idx) => (
                <div key={idx}>
                {<h4>{idx+1}</h4>}
                { activity.name && <img src={activity?.photos?.[0].getUrl()}  style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity.name ?  "" : "Activity Info"}</div>
                    {/* <img src={activity?.photos?.[0].getUrl({maxWidth:140, maxHeight:80})}   /> */}
                        <form>
                            <h3>{activity.name}</h3>
                            <p>{activity.formatted_address}</p>
                            <p>{activity.formatted_phone_number}</p>
                            {activity.rating && <p>Rating: {activity.rating}({activity.user_ratings_total})</p>}
                            {activity.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                            {/* {activity.name && <button onClick={addActivityInfo()}> Add </button>} */}
                        </form>
                </div>

            ))}
            
        </div>
            
    );
}
