import React, { useEffect } from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({dayIdx, itObj, setItObj, info, setInfo, setMarkersPositions, markersPositions,activities, setActivities}) {
   
    const addActivityInfo = () => {
        if(info.name) {
            setActivities([...activities, {
                name: info.name,
                formatted_address: info.formatted_address,
                formatted_phone_number: info.formatted_phone_number,
                place_id: info.place_id,
                rating: info.rating,
                lat: info.geometry.location.lat(),
                lng: info.geometry.location.lng(),
                user_ratings_total: info.user_ratings_total,
                imageUrl: info?.photos?.[0].getUrl()
            }])
        }
    }
    
    useEffect(() => {
        addActivityInfo();
    },[info])
    
    useEffect(()=>{
        let obj = {...itObj, days: [...itObj.days]};
        if (!obj.days[dayIdx]) {
            obj.days[dayIdx] = {};
        }


        if (!obj.days[dayIdx].activities) {
            obj.days[dayIdx].activities = [];
        }    
    
        obj.days[dayIdx] = {...obj.days[dayIdx], activities: [...obj.days[dayIdx].activities, activities[activities.length - 1]]}
        if(!obj.days[dayIdx].activities[activities.length - 1]) obj.days[dayIdx].activities.pop()
      
        setItObj(obj);
     
    },[activities])
    
    const clear = (idx,e) => {
        e.preventDefault();
        const dupAct = [...itObj.days[dayIdx].activities];
        const slicedAcc = dupAct.slice(0, idx).concat(dupAct.slice(idx+1))
        let slicedMarker;

        const dupMarker = [...markersPositions]
        
        if (dupAct.length === markersPositions.length ) {
            slicedMarker = dupMarker.slice(0, idx).concat(dupMarker.slice(idx+1))
        } else {
            const markerIdx =  idx - (dupAct.length - dupMarker.length)
            slicedMarker = dupMarker.slice(0, markerIdx).concat(dupMarker.slice(markerIdx+1))
        }

        let obj = { ...itObj, days: [...itObj.days] };
        if (!obj.days[dayIdx]) {
            obj.days[dayIdx] = {};
        }

        if (!obj.days[dayIdx].activities) {
            obj.days[dayIdx].activities = [];
        }
    
        obj.days[dayIdx] = { ...obj.days[dayIdx], activities:slicedAcc}

        setItObj(obj)
       if (obj) {console.log('delete obj', obj)}
        setMarkersPositions(slicedMarker);
        
    }

    function setComment(day, act, comment, e){
        if(e){
            e.preventDefault()
        }
        let newItObj = {...itObj}
        newItObj.days[day].activities[act].comment = comment
        setItObj(newItObj)
    }

    return (
        <div className='activity-container'>
            {(itObj.days[dayIdx]?.activities || []).map((activity, idx) => (
                <div key={idx}>
                {<h4>{idx+1}</h4>}
                { activity?.name && <img src={activity?.imageUrl} style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity?.name ?  "" : "Activity Info"}</div>
                        <form>
                            <h3>{activity?.name}</h3>
                            <p>{activity?.formatted_address}</p>
                            <p>{activity?.formatted_phone_number}</p>
                            {activity?.rating && <p>Rating: {activity?.rating}({activity?.user_ratings_total})</p>}
                            <div className='comment-holder'>
                                <input placeholder='comments' value={itObj.days[dayIdx].activities[idx].comment} onChange={(e)=>setComment(dayIdx, idx, e.target.value)} />
                                {itObj.days[dayIdx].activities[idx].comment && <button className='remove-comment-button' onClick={(e)=> setComment(dayIdx, idx, "", e)}>X</button>}
                            </div>
                            {activity?.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                        </form>
                </div>

            ))}
        </div>
    );
}
