import './ItineraryList.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItineraries } from '../../store/itineraries';
import ItineraryTile from './ItineraryTile';
import ItinerarySearch from '../ItinerarySearch/ItinerarySearch';


export default function ItineraryList({ searchObj }) {
    const { startDate, endDate, location } = searchObj;
    const dispatch = useDispatch();
    const itineraries = useSelector(state => state.itineraries.all);

    const handleSort = (criteria) => {
        // When seed data gets added, sort itineraries based on sortCriteria here.
        // Simple example sorting by 'likes':
        if (criteria === "likes") {
            itineraries.sort((a, b) => b.likes - a.likes);
        }
    };
    
    useEffect(() => {
        dispatch(fetchItineraries(location));
    }, [dispatch, location]);

    return(
        <div id='list-page-content-container'>
            <div className="itinerary-list-component">
                <ItinerarySearch location={location} startDate={startDate} endDate={endDate}/>
                <div id='itinerary-list-headers'>
                    <h2>Browse itineraries from fellow travelers</h2>
                    <h4> or <Link to='/itineraries/new/plan'>create an itinerary from scratch here</Link></h4>
                </div>
                {Object.values(itineraries).length > 0 ? (
                    <>
                        <div className="sort-container">
                            <select onChange={(e) => handleSort(e.target.value)}>
                                <option value="likes">Likes</option>
                                <option value="views">Views</option>
                                <option value="author">Author</option>
                                <option value="tripLength">Trip Length</option>
                            </select>
                        </div>
                        <ul>
                            {Object.values(itineraries).map(itinerary => (
                                <ItineraryTile key={itinerary._id} itinerary={itinerary} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>{`No itineraries for ${location} found! You can be the first person to share an itinerary for it!`}</p>
                )}
            </div>
        </div>   
    )
  }