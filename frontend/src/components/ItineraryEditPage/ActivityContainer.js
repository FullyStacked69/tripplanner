import React from 'react';
// import Search from '../Search/Search';
// import { useState } from 'react';
export function ActivityContainer({info}) {





    return (
        <div className='activity-container'>
            <img style={{ width: '200px', height: '125px' }} />
            <div className='activity-description'>Activity details section</div>
                <p>{info.name}</p>
            {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo}/> */}

            
        </div>
    );
}
