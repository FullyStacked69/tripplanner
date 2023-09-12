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
    const itineraries = useSelector(state => state.itineraries);
    const [sortedItineraries, setSortedItineraries] = useState([])

    const handleSort = (criteria) => {
        if (criteria === "likes") {
            const sorted = [...itineraries].sort((a, b) => {
                const aValue = (typeof a.fakeLikes === "number") ? a.fakeLikes : 0;
                const bValue = (typeof b.fakeLikes === "number") ? b.fakeLikes : 0;
                return bValue - aValue;
            });
            setSortedItineraries(sorted);
        }
        if (criteria === "author") {
            const sorted = [...itineraries].sort((a, b) => a.author.username.localeCompare(b.author.username));
            setSortedItineraries(sorted);
        }
        if (criteria === "tripLength") {
            const sorted = [...itineraries].sort((a, b) => b.length - a.length);
            setSortedItineraries(sorted);
        }
    };     
    
    useEffect(() => {
        dispatch(fetchItineraries(location));
    }, [dispatch, location]);
    
    useEffect(() => {
        setSortedItineraries(itineraries);
    }, [itineraries]);    

    return(
        <div id='list-page-content-container'>
            <div className="itinerary-list-component">
                <ItinerarySearch location={location} startDate={startDate} endDate={endDate} isMainPage={false} />
                <div id='itinerary-list-headers'>
                    <h2>Browse itineraries from fellow travelers</h2>
                    <h4> or <Link to='/itineraries/new/plan'>create an itinerary from scratch here</Link></h4>
                </div>
                {itineraries.length > 0 ? (
                    <>
                        <div className="sort-container">
                            <select onChange={(e) => handleSort(e.target.value)}>
                                <option value="likes">Likes</option>
                                <option value="author">Author</option>
                                <option value="tripLength">Trip Length</option>
                            </select>
                        </div>
                        <ul>
                            {sortedItineraries.map(itinerary => (
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

