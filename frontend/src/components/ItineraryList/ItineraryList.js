import './ItineraryList.css'
import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItineraries } from '../../store/itineraries';
import {ItineraryTile} from './ItineraryTile'

export default function ItineraryList({location = 'Iceland', startDate, endDate}){

    const dispatch = useDispatch();
    // const itineraries = useSelector(state => state.itineraries);
    // const itineraries = useSelector(state => state.itineraries);

    const itineraries = [
        { title: "Adventure seekers Iceland RoadTrip", length: 7, author: "Bilbo Baggins", likes: 21, views: 340},
    
    ]

    useEffect(() => {
        dispatch(fetchItineraries(location))
    }, [dispatch, location])

    return(
        <div id='list-page-content-container'>
            <div className="itinerary-list-component">
                <div className='selected-trip'>
                    <p>{`Location: ${location}`}</p>
                    <p>{`Start date: ${startDate && startDate}`}</p>
                    <p>{`End date: ${endDate && endDate}`}</p>
                </div>
                <div id='itinerary-list-headers'>
                    <h3>Browse itineraries from fellow travelers</h3>
                    <h4> or <Link to='/itineraries/plan'>create an itinerary from scratch here</Link></h4>
                </div>
                <ul>
                    {itineraries.map(itinerary => (
                        <ItineraryTile key={itinerary._id} itinerary={itinerary} />
                    ))}
                </ul>

            </div>
        </div>   
    )
}