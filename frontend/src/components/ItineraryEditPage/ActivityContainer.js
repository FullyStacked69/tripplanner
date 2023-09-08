import React, { useEffect } from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({dayIdx, itObj, setItObj, info, setInfo, setMarkersPositions, markersPositions,activities, setActivities}) {
   
    console.log('CHECK', markersPositions)    


    const clear = (idx,e) => {
        e.preventDefault();
        const dupAct = [...itObj.days[dayIdx].activities];
        const dupMarker = [...markersPositions]
        const slicedAcc = dupAct.slice(0, dayIdx).concat(dupAct.slice(dayIdx+1))
        const slicedMarker = dupMarker.slice(0, dayIdx).concat(dupMarker.slice(dayIdx+1))
        console.log("CHECK",slicedMarker)

        let obj = {...itObj, days: [...itObj.days]}
        let subObj = {...itObj.days[dayIdx], activities: slicedAcc }
        obj.days[dayIdx] = subObj
        setItObj(obj)
        setMarkersPositions(slicedMarker);
        
    }

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
        let obj = {...itObj, days: [...itObj.days]}
        let subObj = {...itObj.days[dayIdx], activities: [...itObj.days[dayIdx].activities, activities[activities.length - 1] ]}
        obj.days[dayIdx] = subObj
        setItObj(obj)
        console.log(obj)
        // setItObj(({...itObj, days: [...itObj.days, [dayIdx]: {...days[dayIdx], activities: [...days[dayIdx].activities, ...activities]}] }))
    },[activities])

    return (
        <div className='activity-container'>
            {console.log(itObj.days[dayIdx])}
            {itObj.days[dayIdx].activities.map((activity, idx) => (
                <div key={idx}>
                {<h4>{idx+1}</h4>}
                { activity?.name && <img src={activity.imageUrl} style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity?.name ?  "" : "Activity Info"}</div>
                    {/* <img src={activity?.photos?.[0].getUrl({maxWidth:140, maxHeight:80})}   /> */}
                        <form>
                            <h3>{activity?.name}</h3>
                            <p>{activity?.formatted_address}</p>
                            <p>{activity?.formatted_phone_number}</p>
                            {activity?.rating && <p>Rating: {activity.rating}({activity.user_ratings_total})</p>}
                            {activity?.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                            {/* {activity.name && <button onClick={addActivityInfo()}> Add </button>} */}
                        </form>
                </div>

            ))}
            
        </div>
            
    );
}
