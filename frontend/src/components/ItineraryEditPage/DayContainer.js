import React, { useState } from 'react';
import { ActivityContainer } from './ActivityContainer';
import Search from '../Search/Search';

export function DayContainer({ day, index, map, setMarkersPositions, markersPositions, setCenter}) {
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState({});

    console.log(info)



    //clear info -> setInfo

    





    const handleClick = (e) => {
        e.preventDefault();

        console.log("event", e)

        if (e.target.nodeName === "DIV") {
            setIsOpen(!isOpen)
        }
        
    }

    return (
        <div className='day-container'>
            <div className='item' onClick={handleClick}>
                {/* <button type='' value={"collapse"} ></button> */}
                <div className='title' 
                     style={{ 
                         backgroundColor: isOpen ? '#457B9D' : 'transparent', 
                         color: isOpen ? 'white' : '#457B9D'
                     }}
                >
                    <div className='day-detail-container'>
                        <h3>{day.date}</h3>                    
                        <h5>{day.places} places</h5>
                    </div>
                    <span className='arrow-icon'>{isOpen ? '\u25b2' : '\u25bc'}</span>
                </div>
                <div className='content' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className='content-container'>
                        <input placeholder='You dont have a place to stay yet!'></input>
                        <ActivityContainer info={info} />
                        <input placeholder='Add activities for your trip here'></input>
                        <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo}/>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
