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
import axios from 'axios';
import missingImg from './assets/placeholder-image.jpeg';
import { createItinerary, deleteItinerary, fetchItinerary, updateItinerary } from '../../store/itineraries';
import {setItObj as setItRedux } from '../../store/itineraries';
import {setSearchObjRedux} from '../../store/searchObj';






const ItineraryEditPage = ({showLoginModal, setShowLoginModal}) => {
    const dispatch = useDispatch()
    
    const [markersPositions, setMarkersPositions] = useState([]);

    const {itObj} = useSelector(state => state.itineraries)
    const { user } = useSelector(state => state.session)
    const [days, setDays] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [allDaysOpen, setAllDaysOpen] = useState(false);
    
    const {searchObj} = useSelector(state => state)
    
    const {itineraryId} = useParams()

    const [googleActivities, setGoogleActivities] = useState([]);

    const [deleted, setDeleted] = useState(false);
    const [infoWin, setInfoWin] = useState(false);

    const [category, setCategory] = useState("tourist_attraction");

    // pagination code
    const getItemsPerPage = () => {
        const width = window.innerWidth;
        
        if (width <= 1040) {
            return 3; // 3 items per page for <= 1040px
        } else if (width <= 1301) {
            return 6; // 6 items per page for <= 1301px
        } else {
            return 6; // default number of items per page
        }
    };    
    
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
    const [currentPage, setCurrentPage] = useState(1);
    const displayedActivities = googleActivities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    const nextPage = () => {
        if (currentPage * itemsPerPage < googleActivities.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);    
    // pagination code end

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
                if(itObj?.days && itObj.days.length > 1){
                    if(searchObj.startDate && searchObj.endDate){
                        const dateRange = datesBetween(searchObj.startDate, searchObj.endDate); 
                        days = dateRange.map(date => ({
                            date,
                            activities: [],
                        }));
                        days = days.map((day, idx)=>{
                            return itObj.days[idx]
                        })
                        setItObj({...itObj, ...searchObj, locationName: searchObj.location, days: days, _id: undefined})
                    } 
                } else {
                    if(searchObj.startDate && searchObj.endDate){
                        const dateRange = datesBetween(searchObj.startDate, searchObj.endDate); 
                        days = dateRange.map(date => ({
                            date,
                            activities: [],
                        }));
                        setItObj({...itObj, ...searchObj, locationName: searchObj.location, days: days, _id:undefined})
                    } 
                }
            }
        }
    },[itineraryId])

    useEffect(()=>{
        if(itineraryId === 'new' && itObj?.location && !itObj?.title){
            setItObj({...itObj, title: `Trip to ${itObj.locationName}`})
        }
        if(itObj?.lat){
            dispatch(setSearchObjRedux({}))
        }
    }, [itObj?.location]) // need error handeling, 

    useEffect(() => {
        if (itObj?.lat && itObj?.lng) {
            // Fetch data from your backend which gets data from Google API
            axios.get(`/api/places/activities/${itObj.lat},${itObj.lng}?type=${category}`)
            .then(response => {
                const sortedActivities = (response.data.results || []).sort((a, b) => b.rating - a.rating).slice(0, 18); // Manual sort because 'rankby' parameter sort isn't accurate
                setGoogleActivities(sortedActivities);
            })
            .catch(error => {
                console.error("Error fetching top activities:", error);
            });
        }
    }, [itObj?.lat, itObj?.lng, category]); 

    const deleteDay = (idx,e) => {
        e.preventDefault();
        let updatedItObj = { ...itObj, days: [...itObj.days], length: itObj.length - 1 };
        
        if (idx === 0 && updatedItObj.days.length > 1) {
            const nextDayDate = new Date(updatedItObj.startDate);
            nextDayDate.setDate(nextDayDate.getDate() + 1);
            updatedItObj.startDate = nextDayDate.toISOString();
        }

        // Remove the day using splice method
        updatedItObj.days.splice(idx, 1);
    
        // Update the itinerary object
        setItObj(updatedItObj);
    }

    const addDay = () => {
        const newDay = {
            activities: [],
        }

        setItObj({
            ...itObj,
            days: [...itObj.days, newDay],
            length: itObj.length + 1,
            
        })
    }
    
    const splashLat = itObj?.lat
    const splashLng = itObj?.lng
    const splashPos = {
        lat: splashLat ?? 37.4245,
        lng: splashLng ?? -122.0782
    };

    const [center, setCenter] = useState(splashPos)

    const places = itObj?.days?.reduce((acc, day) => {
        return acc.concat(day?.activities?.map(activity => ({
            name: activity?.name,
            address: activity?.formatted_address,
            phone: activity?.formatted_phone_number,
            rating: activity?.rating,
            user_ratings_total: activity?.user_ratings_total,
            lat: activity?.lat,
            lng: activity?.lng
        })));
    }, []).filter(Boolean);

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
        if (map && !places?.length && itObj?.locationName) {
            let geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ 'address': itObj.locationName }, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    map.fitBounds(results[0].geometry.viewport);
                }
            });
        } 
        // else {map?.setZoom(10)}
    }, [itObj?.locationName, map, places?.length]);
    
    useEffect(() => {
        if (map && places?.length > 0) {
            let bounds = new window.google.maps.LatLngBounds();
            places.forEach(place => {
                bounds.extend(new window.google.maps.LatLng(place.lat, place.lng));
            });
            map.fitBounds(bounds);

            let latSum = 0;
            let lngSum = 0;
            places.forEach(place => {
                latSum += place.lat;
                lngSum += place.lng;
            });
            setCenter({
                lat: latSum / places?.length,
                lng: lngSum / places?.length
            });
        }
    }, [map, itObj]);

    const formateDate = (date) => {
        if(date){
            const year = date.getFullYear();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = monthNames[date.getMonth()];
            const day = String(date.getDate()).padStart(2, '0');
            return `${day} ${month} ${year}`;
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
        if(user?._id){
            if (itineraryId === 'new') {
                try {
                    let newItiniterary = {
                        ...itObj,
                        length: itObj?.days.length,
                        user 
                    }
                    const res = await dispatch(createItinerary(newItiniterary));
                    setItObj(res)
    
                } catch (error) {
                    console.error("Error saving itinerary:", error);
                }
            } else {
                try {
                    await dispatch(updateItinerary(itObj));
                } catch (error) {
                    console.error("Error saving itinerary:", error);
                }
    
            }
        }else{
            setShowLoginModal(true);
        }
    }


    const handleDelete = async (e) => {
        e.preventDefault()
        const res = await dispatch(deleteItinerary(itineraryId))
        if(res._id) setDeleted(true)
    }
    
    if (!isLoaded) {return (<div>Loading...</div>)}
    if(!itObj) return null
    if(itineraryId === 'new' && !itObj.locationName) return <Redirect to="/"/>

    if(deleted) return <Redirect to='/'/>
    if(itineraryId === 'new' && itObj._id) return <Redirect to ={`/itineraries/${itObj._id}/plan`}/>



    let lastDate;
    let dateObj;
    
    if(!searchObj.startDate){
        dateObj = new Date(itObj.startDate)
        lastDate = new Date( dateObj )
        lastDate.setDate(itObj?.days?.length + dateObj.getDate() - 1)
    }

    const passed = () => {
        if(lastDate && (new Date() > lastDate)){
            return true
        }
    }

    const owned = () => {
        if(itineraryId === 'new'){
            return true
        } else {
            if(user?._id === itObj?.author?._id){
                return true
            } else if (!itObj?.author) {
                return true
            }
        }
    }

    if(itineraryId !== 'new' && !owned()){
        return <Redirect to={`/`}/>
    }

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
                                {itObj.days.map((day, index) => (
                                    <li key={index} onClick={() => handleDayClick(index)}>Day {index + 1}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div id='itinerary-section-content'>
                    <div id='itinerary-tld'>
                        <div id='title-date-container'>
                            <textarea onChange={(e)=>setItObj({...itObj, title: e.target.value})} value={itObj.title}></textarea>
                        </div>
                        <div id='itinerary-tld-bttm'>
                            {lastDate && <div>{formateDate(dateObj)} - {formateDate(lastDate)} </div>}
                            {!lastDate && <div>{formateDate(new Date (searchObj.startDate))} - {formateDate(new Date (searchObj.endDate))} </div>}
                        </div>
                    </div>
                    <div id='popular-activities-section'>
                        <div id='activity-list'>
                            <h2>Top places for {itObj.locationName}</h2> 
                            <select value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="tourist_attraction">Tourist Attractions</option>
                                <option value="restaurant">Restaurants</option>
                                <option value="museum">Museums</option>
                                <option value="park">Parks</option>
                                <option value="lodging">Accommodations</option>
                            </select>
                            <div id='popular-activities-container'>
                                {displayedActivities.map((activity, idx) => (
                                    <ExploreActivitiesTile key={idx} activity={{
                                        name: activity.name,
                                        url: activity.photos?.[0]?.photo_reference ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${activity.photos[0].photo_reference}&key=${process.env.REACT_APP_MAPS_API_KEY}` : missingImg
                                    }} />
                                ))}
                            </div>
                            <div className="pagination-controls">
                                <button onClick={prevPage} disabled={currentPage === 1}>&#9664;</button>
                                <span>Page {currentPage}</span>
                                <button onClick={nextPage} disabled={currentPage * itemsPerPage >= googleActivities.length}>&#9654;</button>
                            </div>
                        </div>
                    </div>
                    <div id='itinerary-container'>
                        <div id='itinerary-header'>
                            <h2>Itinerary</h2>   
                            <a onClick={() => setAllDaysOpen(!allDaysOpen)}>{allDaysOpen ? 'Collapse All' : 'Expand All'}</a>
                        </div>
                        <div id='itineary-days-container'>
                            {itObj.days && itObj.days.map((day, index) => <DayContainer owned={owned} passed={passed} itObj={itObj} setItObj={setItObj} id={`day-${index}`} key={index} day={day} index={index} map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} setDays={setDays} deleteDay={deleteDay} allDaysOpen={allDaysOpen}/>)}    
                        </div>
                        <div>
                            <button onClick={handleSave}>Save</button>
                            {itineraryId !== 'new' && <button onClick={e => handleDelete(e)}>Delete</button>}
                            {!passed() && <button onClick={() => addDay()}> Add a Day</button>}
                        </div>
                    </div>
                </div>
            </div>
        
            <div id='sticky'>
            <GoogleMap 
            onLoad={onLoad}
            center={center}
            mapContainerClassName="map-container"
            >

                {places?.length > 0 && places?.map(place => (
                    <MarkerInfoWindow infoWin={infoWin} setInfoWin={setInfoWin} place={place} position={{ lat: place?.lat, lng: place?.lng }} />
                ))}

 


            </GoogleMap>
            </div>
        </div>

    
    )
}    

export default ItineraryEditPage;