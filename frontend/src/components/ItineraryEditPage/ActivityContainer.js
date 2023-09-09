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
      
        setItObj(obj);
     
    },[activities])
    
    // console.log('CHECK', markersPositions)    
    
    
    const clear = (idx,e) => {
        e.preventDefault();
        const dupAct = [...itObj.days[dayIdx].activities];
        const slicedAcc = dupAct.slice(0, idx).concat(dupAct.slice(idx+1))
        let slicedMarker;
        // console.log("obj", itObj.days[dayIdx].activities) // undefined
        
        const dupMarker = [...markersPositions]
        
        if (dupAct.length === markersPositions.length ) {
            slicedMarker = dupMarker.slice(0, idx).concat(dupMarker.slice(idx+1))
            // return slicedMarker
        } else {
            const markerIdx =  idx - (dupAct.length - dupMarker.length)
            slicedMarker = dupMarker.slice(0, markerIdx).concat(dupMarker.slice(markerIdx+1))
            // return slicedMarker
        }


        // console.log("CHECK",slicedMarker)

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
    return (
        <div className='activity-container'>
            {/* {console.log(itObj.days[dayIdx])} */}
            {(itObj.days[dayIdx]?.activities || []).map((activity, idx) => (
                <div key={idx}>
                {<h4>{idx+1}</h4>}
                { activity?.name && <img src={activity?.imageUrl} style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity?.name ?  "" : "Activity Info"}</div>
                    {/* <img src={activity?.photos?.[0].getUrl({maxWidth:140, maxHeight:80})}   /> */}
                        <form>
                            <h3>{activity?.name}</h3>
                            <p>{activity?.formatted_address}</p>
                            <p>{activity?.formatted_phone_number}</p>
                            {activity?.rating && <p>Rating: {activity?.rating}({activity?.user_ratings_total})</p>}
                            {activity?.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                        </form>
                </div>

            ))}
            
        </div>
            
        // <>
        //     TEST
        // </>
    );
}
