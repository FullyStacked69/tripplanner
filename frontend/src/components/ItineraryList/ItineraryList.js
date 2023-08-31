import './ItineraryList.css'
import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItineraries } from '../../store/itineraries';

export default function ItineraryList({location = 'Iceland', startDate, endDate}){

    const dispatch = useDispatch();
    const itineraries = useSelector(state => state.itineraries);

    useEffect(() => {
        dispatch(fetchItineraries(location))
    }, [dispatch, location])

    return(
        <div className="itinerary-list-component">
            <div className='selected-trip'>
                <p>{`Location: ${location}`}</p>
                <p>{`Start date: ${startDate && startDate}`}</p>
                <p>{`End date: ${endDate && endDate}`}</p>
            </div>
            <div>
                <p>Browse itineraries from fellow travelers</p>
                <p> or <Link to='/itineraries/plan'>create an itinerary from scratch here</Link></p>
            </div>
            <ul>
                {itineraries.map(itinerary => (
                    <li key={itinerary._id}>
                        <p>{itinerary.title}</p>
                        {console.log(itinerary)}
                    </li>
                ))}
            </ul>

        </div>
    )
}