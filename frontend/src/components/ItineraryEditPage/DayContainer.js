import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ActivityContainer } from './ActivityContainer';
import Search from '../Search/Search';
import { RecommendedActivityTile } from './RecommendedActivityTile';

export function DayContainer({ itObj, setItObj, id, day, index, map, setMarkersPositions, markersPositions, setCenter, deleteDay, allDaysOpen}) {
    const [isOpen, setIsOpen] = useState(allDaysOpen);

    const [hovered, setHovered] = useState();    
    
    const [info, setInfo] = useState({});
    const [activities, setActivities] = useState([]);


    useEffect(() => {
        setIsOpen(allDaysOpen);
    }, [allDaysOpen]);

    return (
        <div className='day-container' id={id}>
            <div className='item'>
                <div className='title' onClick={() => setIsOpen(!isOpen)}
                        style={{
                            backgroundColor: isOpen || hovered ? "#457B9D" : "transparent",
                            color: isOpen || hovered ? "white" : "#457B9D",
                          }}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                    >
                    <div className='day-detail-container'>
                        <h3>Day {index + 1}</h3>         
                        <h5>{itObj.days[index]?.activities.length} places</h5>
                    </div>

                    <span className='arrow-icon'>{isOpen ? '\u25b2' : '\u25bc'}</span>
                </div>

                <div className='content' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className='content-container'>
                        {/* <input placeholder='You dont have a place to stay yet!'></input> */}
                        {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo} activities={activities} setActivities={setActivities}/> */}

                        <ActivityContainer dayIdx={index} itObj={itObj} setItObj={setItObj} info={info} setInfo={setInfo} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} activities={activities} setActivities={setActivities}/>
                        {/* <input placeholder='Add activities for your trip here'></input> */}
                        <Search index={index} itObj={itObj} setItObj={setItObj} map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo} activities={activities} setActivities={setActivities}/>
                        <button onClick={(e) => deleteDay(index, e)}> Remove Day {index + 1} </button>

                        {/* <div> */}
                            
                            {/* <div id='recommendations-section'>
                                // <h5>Recommended places close to your hotel or latest activity</h5>
                                <div id='recommended-activities-container'> */}
                                    {/* Should iterate through recommended activities and run the info through the RecommendedActivityTile component */}
                                    {/* {sampleActivities.map((sampleActivity, index) => (
                                        <RecommendedActivityTile  key={index} sampleActivity={sampleActivity} index={index} />
                                    ))} */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    
    )
}