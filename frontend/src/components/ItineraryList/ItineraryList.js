import './ItineraryList.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItineraries } from '../../store/itineraries';

export default function ItineraryList({ searchObj }) {
    const { startDate, endDate } = searchObj;
    const location = 'Iceland';
    const dispatch = useDispatch();
    const itineraries = useSelector(state => state.itineraries);

    useEffect(() => {
        dispatch(fetchItineraries(location));
    }, [dispatch, location]);

    return (
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
                        <ul>
                            {itinerary.days.map((day, index) => (
                                <li key={day._id}>
                                    <p>{`Day ${index + 1}:`}</p>
                                    <p>Accommodation: {day.accommodation}</p>
                                    <ul><p>Activities:</p>
                                        {day.activities.map(activity => (
                                            <li key={activity._id}>{activity.title}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
