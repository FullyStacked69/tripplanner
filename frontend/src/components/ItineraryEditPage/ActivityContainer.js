import React from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({info, setInfo, setMarkersPositions}) {

    // console.log('activity', info?.photos?.[0] || "")

    const clear = () => {
        setInfo({})
        setMarkersPositions([]);
    }

    const activityInfo = () => {
        return (
            <>
            
            
            </>
        )
    }





    return (
        <div className='activity-container'>
            <img src={info?.photos?.[0].getUrl()}  style={{ width: '200px', height: '125px' }} />
            <div className='activity-description'>{info.name ?  "" : "Activity Info"}</div>
            {/* <img src={info?.photos?.[0].getUrl({maxWidth:140, maxHeight:80})}   /> */}
                <form>
                    <h3>{info.name}</h3>
                    <p>{info.formatted_address}</p>
                    <p>{info.formatted_phone_number}</p>
                    {info.rating && <p>Rating: {info.rating}({info.user_ratings_total})</p>}
                    {info.name && <button onClick={clear}> Delete </button>}
                </form>


            {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo}/> */}

            
        </div>
    );
}
