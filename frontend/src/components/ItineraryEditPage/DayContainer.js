import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ActivityContainer } from './ActivityContainer';
import Search from '../Search/Search';
import { RecommendedActivityTile } from './RecommendedActivityTile';

export function DayContainer({ day, index, map, setMarkersPositions, markersPositions, setCenter, activities, setActivities, onSave}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState()
;    const sampleActivities = [
        { image: "", name: "Test name 1" },
        { image: "", name: "Test name 2"  },
        { image: "", name: "Test name 3"  },
        { image: "", name: "Test name 4"  },
        { image: "", name: "Test name 5"  },

    ]
    const [info, setInfo] = useState({});
  

  
    // console.log("place",info?.photos?.[0] || "")
    // console.log(day.date)
    // console.log('activities',activities)



    //clear info -> setInfo

    return (
        <div className='day-container'>
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
                        <h3>{day.date}</h3>                    
                        <h5>{activities.length} places</h5>
                    </div>

                    <span className='arrow-icon'>{isOpen ? '\u25b2' : '\u25bc'}</span>
                </div>

                <div className='content' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className='content-container'>
                        <input placeholder='You dont have a place to stay yet!'></input>
                        {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo} activities={activities} setActivities={setActivities}/> */}

                        <ActivityContainer info={info} setInfo={setInfo} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} activities={activities} setActivities={setActivities}/>
                        {/* <input placeholder='Add activities for your trip here'></input> */}
                        <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setInfo={setInfo} activities={activities} setActivities={setActivities}/>
                        {/* <button> + </button> */}

                        <div>
                            
                            <div id='recommendations-section'>
                                <h5>Recommended places close to your hotel or latest activity</h5>
                                <div id='recommended-activities-container'>
                                    {/* Should iterate through recommended activities and run the info through the RecommendedActivityTile component */}
                                    {sampleActivities.map((sampleActivity, index) => (
                                        <RecommendedActivityTile  key={index} sampleActivity={sampleActivity} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
