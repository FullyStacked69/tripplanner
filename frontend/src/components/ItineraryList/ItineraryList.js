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
        {
          "title": "Adventure seekers Iceland RoadTrip",
          "length": 7,
          "author": "Bilbo Baggins",
          "likes": 21,
          "views": 340,
          "days": {
            "1": ["Hiking to Skogafoss", "Visit to Seljalandsfoss"],
            "2": ["Exploring the Black Sand Beaches"],
            "3": ["Golden Circle Route: Geysir, Gullfoss", "Thingvellir National Park"],
            "4": ["Relaxing at the Blue Lagoon"],
            "5": ["Skaftafell National Park Adventure"],
            "6": ["Jokulsarlon Glacier Lagoon"],
            "7": ["Return to Reykjavik"]
          }
        },
        {
          "title": "Exploring the Land of Fire and Ice",
          "length": 10,
          "author": "Eowyn Snow",
          "likes": 45,
          "views": 890,
          "days": {
            "1": ["Arrival in Reykjavik", "Exploring the City"],
            "2": ["Silfra Fissure Snorkeling"],
            "3": ["South Coast Discovery"],
            "4": ["Vatnajokull Glacier Hike"],
            "5": ["Akureyri and Northern Beauty"],
            "6": ["Whale Watching"],
            "7": ["East Fjords Exploration"],
            "8": ["Myvatn Nature Baths"],
            "9": ["Húsavík: The Whale Watching Capital"],
            "10": ["Return to Reykjavik"]
          }
        },
        {
          "title": "Icelandic Wonders: From Reykjavik to the Glaciers",
          "length": 8,
          "author": "Aragorn Frost",
          "likes": 72,
          "views": 1250,
          "days": {
            "1": ["Arrival in Reykjavik"],
            "2": ["Reykjavik City Tour"],
            "3": ["Golden Circle Exploration"],
            "4": ["Into the Glacier: Langjokull Ice Tunnel"],
            "5": ["Borgarfjordur and Hraunfossar"],
            "6": ["Exploring Westfjords"],
            "7": ["Dynjandi Waterfall Hike"],
            "8": ["Return to Reykjavik"]
          }
        },
        {
          "title": "Northern Lights Quest: Chasing Aurora Borealis in Iceland",
          "length": 5,
          "author": "Gimli Aurora",
          "likes": 30,
          "views": 620,
          "days": {
            "1": ["Arrival in Reykjavik", "Evening Northern Lights Hunt"],
            "2": ["Golden Circle and Geothermal Pools"],
            "3": ["South Coast Adventure"],
            "4": ["Glacier Hike and Ice Cave Exploration"],
            "5": ["Return to Reykjavik"]
          }
        },
        {
          "title": "Ring Road Adventure: Circling the Beauty of Iceland",
          "length": 14,
          "author": "Legolas Rivers",
          "likes": 56,
          "views": 1100,
          "days": {
            "1": ["Start from Reykjavik", "Exploring the Snæfellsnes Peninsula"],
            "2": ["Northwest Fjords Discovery"],
            "3": ["Akureyri and Surroundings"],
            "4": ["Myvatn and Surrounding Attractions"],
            "5": ["Eastern Fjords and Seydisfjordur"],
            "6": ["Hofn and Southeast Adventures"],
            "7": ["Vatnajokull National Park"],
            "8": ["Jokulsarlon Glacier Lagoon"],
            "9": ["South Coast Highlights"],
            "10": ["Golden Circle Attractions"],
            "11": ["Return to Reykjavik"]
          }
        }
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