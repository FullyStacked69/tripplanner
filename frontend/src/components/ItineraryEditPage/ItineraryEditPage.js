import React from 'react';
import { useState, useRef, useEffect } from "react";
import './ItineraryEditPage.css';
import Search from '../Search/Search';
import { DayContainer } from './DayContainer';
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, setZoom, DirectionsRenderer, InfoWindow} from '@react-google-maps/api';
import MarkerInfoWindow from '../Maps/MarkerInfoWindow';
import './Maps.css'
import { ExploreActivitiesTile } from './ExploreActivitiesTile';
import './NestedComponents.css'
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItinerary } from '../../store/itineraries';
import axios from 'axios';
import missingImg from './assets/placeholder-image.jpeg';
import { createItinerary, fetchItinerary, updateItinerary } from '../../store/itineraries';
import {setItObj as setItRedux } from '../../store/itineraries';


const ItineraryEditPage = () => {
    const dispatch = useDispatch()
    
    const [markersPositions, setMarkersPositions] = useState([]);
    
    const {itObj} = useSelector(state => state.itineraries)
    const { user } = useSelector(state => state.session)
    const [days, setDays] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const {searchObj} = useSelector(state => state)
    
    const {itineraryId} = useParams()

    const [googleActivities, setGoogleActivities] = useState([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleDayClick = (index) => {
        const element = document.getElementById(`day-${index}`);
        const navbarHeight = 60; 
        const positionToScrollTo = element.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: positionToScrollTo,
            behavior: "smooth"
        });
    };

    const setItObj = itinerary => {
        dispatch(setItRedux(itinerary))
    }

    useEffect(() =>{
        if(itineraryId !== 'new'){
            let it = async () => {
                const res = await dispatch(fetchItinerary(itineraryId))
                setItObj(res)
                setDays(() => res.days)
            }
            it()
        } else if (itineraryId === 'new'){
            if(searchObj){
                let days = []
                if(itObj.days && itObj.days.length > 1){
                    if(searchObj.startDate && searchObj.endDate){
                        const dateRange = datesBetween(searchObj.startDate, searchObj.endDate); 
                        days = dateRange.map(date => ({
                            date,
                            activities: [],
                        }));
                        days = days.map((day, idx)=>{
                            return itObj.days[idx]
                        })
                        setItObj({...itObj, ...searchObj, locationName: searchObj.location, days: days})
                    } 
                } else {
                    if(searchObj.startDate && searchObj.endDate){
                        const dateRange = datesBetween(searchObj.startDate, searchObj.endDate); 
                        days = dateRange.map(date => ({
                            date,
                            activities: [],
                        }));
                        setItObj({...itObj, ...searchObj, locationName: searchObj.location, days: days})
                    } 
                }
            }
        }
    },[itineraryId])

    useEffect(() => {
        if (itObj?.lat && itObj?.lng) {
            // Fetch data from your backend which gets data from Google API
            axios.get(`/api/places/activities/${itObj.lat},${itObj.lng}`)
                .then(response => {
                    console.error("fetched top activities:");
                    setGoogleActivities(response.data.results || []);
                })
                .catch(error => {
                    console.error("Error fetching top activities:", error);
                });
        }
    }, [itObj?.lat, itObj?.lng]);

    const deleteDay = (idx,e) => {
        e.preventDefault();
        const dupDay = [...days];
        const slicedDays = dupDay.slice(0, idx).concat(dupDay.slice(idx+1))

        setItObj({...itObj, days: slicedDays})
    }
    
    const splashLat = itObj?.lat
    const splashLng = itObj?.lng
    const splashPos = {
        lat: splashLat ?? 37.4245,
        lng: splashLng ?? -122.0782
    };

    const [center, setCenter] = useState(splashPos)

        
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries: ['places'],
    })
    

    const [map, setMap] = useState(null);
    
    
    const onLoad = (location) => {
        setMap(location)
    }
    
    useEffect(() => {
        // If there are no markers, geocode the location
        if (map && !markersPositions.length && itObj?.locationName) {
            let geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ 'address': itObj.locationName }, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    map.fitBounds(results[0].geometry.viewport);
                }
            });
        } 
        // else {map?.setZoom(10)}
    }, [itObj?.locationName, map, markersPositions.length]);
    
    useEffect(() => {
        if (map && markersPositions.length > 0) {
            let bounds = new window.google.maps.LatLngBounds();
            markersPositions.forEach(place => {
                bounds.extend(new window.google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            });
            map.fitBounds(bounds);

            let latSum = 0;
            let lngSum = 0;
            markersPositions.forEach(place => {
                latSum += place.geometry.location.lat();
                lngSum += place.geometry.location.lng();
            });
            setCenter({
                lat: latSum / markersPositions.length,
                lng: lngSum / markersPositions.length
            });

        }
    }, [markersPositions, map]);

    const formateDate = (date) => {
        if(date){
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-based in JS
            const day = String(date.getDate()).padStart(2, '0');
    
            return `${year}/${month}/${day}`;
        }
    }

    const datesBetween = (startDate, endDate) => {
        const datesArray = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            datesArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return datesArray
    }
    
    const handleSave = async (e) => {
        e.preventDefault();
        if (itineraryId === 'new') {
            try {
                let newItiniterary = {
                    ...itObj,
                    length: itObj.days.length,
                    user 
                }
                await dispatch(createItinerary(newItiniterary));
                console.log("Itinerary has been saved")
            } catch (error) {
                console.error("Error saving itinerary:", error);
            }
        } else {
            try {
                await dispatch(updateItinerary(itObj));
                console.log("Itinerary has been updated")
            } catch (error) {
                console.error("Error saving itinerary:", error);
            }

        }
    }



    
    if (!isLoaded) {return (<div>Loading...</div>)}
    if(!itObj) return null
    if(itineraryId === 'new' && !searchObj.location) return <Redirect to="/"/>

    console.log(itObj)

    return ( 
        <div className='page-content-container'>
            <div id='itinerary-section-container'>
                <div id='sidebar-container'>
                    <div id='sidebar'>
                        <div className='sidebar-item'>
                            <h4 onClick={scrollToTop}>Top Locations</h4>
                        </div>
                        <div className='sidebar-item' onClick={toggleDropdown}>
                            <h4>Itinerary</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul className="days-dropdown">
                                {days.map((day, index) => (
                                    <li key={index} onClick={() => handleDayClick(index)}>Day {index + 1}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div id='itinerary-section-content'>
                    <div id='itinerary-tld'>
                        <div id='title-date-container'>
                            <h1>{itObj.title}</h1>
                            <div>{formateDate(searchObj.startDate)} - {formateDate(searchObj.endDate)} </div>
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
                            <h2>Top locations for {itObj.locationName}</h2> 
                            
                            <div id='popular-activities-container'>
                                {googleActivities.map((activity, idx) => (
                                    <ExploreActivitiesTile key={idx} activity={{
                                        name: activity.name,
                                        url: activity.photos?.[0]?.photo_reference ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${activity.photos[0].photo_reference}&key=${process.env.REACT_APP_MAPS_API_KEY}` : missingImg
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id='itinerary-container'>
                        <div id='itinerary-header'>
                            <h2>Itinerary</h2>   
                            <a>Collapse All</a>
                        </div>
                        <div id='itineary-days-container'>
                            {itObj.days && itObj.days.map((day, index) => (
                                <>
                                <DayContainer itObj={itObj} setItObj={setItObj} id={`day-${index}`} key={index} day={day} index={index} map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setDays={setDays} />
                                {/* <button>Remove this Day </button> */}
                                </>
                                ))}
                            
                        </div>
                            <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        
            <div id='sticky'>
            <GoogleMap 
            onLoad={onLoad}
            center={center}
            mapContainerClassName="map-container"
            >
                {markersPositions.map((place, idx) => <MarkerInfoWindow key={idx} place={place} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />)}
            </GoogleMap>
            </div>
        </div>
    )
}    

export default ItineraryEditPage;