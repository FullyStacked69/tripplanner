import React from 'react';
import { useState, useRef, useEffect } from "react";
import './ItineraryEditPage.css';
import Search from '../Search/Search';
import { DayContainer } from './DayContainer';
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, InfoWindow} from '@react-google-maps/api';
import MarkerInfoWindow from '../Maps/MarkerInfoWindow';
import './Maps.css'


import { ExploreActivitiesTile } from './ExploreActivitiesTile';
import './NestedComponents.css'

const ItineraryEditPage = () => {
    const days = [
            { date: "Saturday, September 9th", places: 5 },
            { date: "Sunday, September 10th", places: 3 },
            { date: "Monday, September 11th", places: 2 },
            { date: "Tuesday, September 12th", places: 4 },
            { date: "Wednesday, September 12th", places: 4 },
        ];

        // console.log('HIIIIIII')

    const [markersPositions, setMarkersPositions] = useState([]);
    const [center, setCenter] = useState({lat: 37.4245, lng: -122.0782})

        
        const {isLoaded} = useJsApiLoader({
            googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
            libraries: ['places'],
        })
        
        const init = {lat: 37.4245, lng: -122.0782}
        const [map, setMap] = useState(null);
        
        if (!isLoaded) {return (<div>Loading...</div>)}

        const onLoad = (location) => {
            setMap(location)
        }



        return ( 
            <div className='page-content-container'>
            <div id='itinerary-section-container'>
                <div id='sidebar'>Sidebar</div>
                <div id='itinerary-section-content'>
                    <div id='itinerary-tld'>
                        <div id='title-date-container'>
                            <h1>Trip to Iceland</h1>
                            <div>9/9 - 9/16</div>
                        </div>
                        <div id='itinerary-tld-bttns'>
                            {/* <button>Share</button> */}
                            <div></div>
                            <div id='members-container'>
                                <div id='member-icon'>E</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16"> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/> </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='popular-activities-section'>
                        <div id='activity-list'>
                            <h2>Top locations for [insert location value]</h2> 
                            
                            <div id='popular-activities-container'>
                                <ExploreActivitiesTile />
                                <ExploreActivitiesTile />
                                <ExploreActivitiesTile />
                                <ExploreActivitiesTile />
                                <ExploreActivitiesTile />
                                <ExploreActivitiesTile />
                            </div>
                        </div>
                    </div>
                    <div id='itinerary-container'>
                        <div id='itinerary-header'>
                            <h2>Itinerary</h2>

                            {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter}/> */}
                            
                            <a>Collapse All</a>
                            {/* <a>Collapse All</a> */}
                        </div>
                        <div id='itineary-days-container'>
                            {days.map((day, index) => (
                                <DayContainer key={index} day={day} index={index} map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} />
                                ))}
                        </div>
                    </div>
                </div>

            </div>
            
                {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter}/> */}
                {/* <Search map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions}/> */}
                <GoogleMap 
                onLoad={onLoad}
                // ref={mapRef}
                center={center}
                zoom={10}
                mapContainerClassName="map-container"
                >
                    {/* <Marker position={center} /> */}
                    {/* <Marker position={{lat:37.96, lng:-122.0296}} /> */}
                    {markersPositions.map((place, idx) => <MarkerInfoWindow key={idx} place={place} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />)}
                    {/* <InfoWindow /> */}
                </GoogleMap>
        </div>
      )
}    

    export default ItineraryEditPage;