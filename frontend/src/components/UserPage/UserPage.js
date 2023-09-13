import { useDispatch, useSelector } from 'react-redux';
import './UserPage.css';
import TripTile from './TripTile';
import { useEffect } from 'react';
import { fetchItineraries, fetchUserItineraries } from '../../store/itineraries';
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage () {

    const dispatch = useDispatch()
    
    const {user} = useSelector(state => state.session);

    const {userId} = useParams()
    
    const itineraries = useSelector(state => Object.values(state.itineraries.all));

    let userTrips = [];

    if(itineraries.length > 0){
        userTrips = itineraries.filter(itinerary => {
            if ( itinerary.author) return itinerary.author._id === userId
        });
    }

    const currentDate = new Date();

    const upcomingTrips = userTrips.filter(trip => {
        const endDate = new Date(trip.startDate);
        endDate.setDate(endDate.getDate() + trip.length - 1);
        return endDate >= currentDate;
    });

    const pastTrips = userTrips.filter(trip => {
        const endDate = new Date(trip.startDate);
        endDate.setDate(endDate.getDate() + trip.length - 1);
        return endDate < currentDate;
    });

    useEffect(()=>{
        dispatch(fetchUserItineraries(userId))
    },[])

    if(!user || (user._id !== userId)) return <Redirect to={'/'}/>

    return (
        <div id='user-page-container'>
            <div id='user-page-content-container'>
                <div id='upcoming-trips-section-container'>
                    <h3>Current or upcoming trips</h3>
                    <div className="trips-container">
                        {upcomingTrips.length > 0 ? (
                            <ul>
                                {upcomingTrips.map(trip => (
                                    <TripTile key={trip._id} trip={trip} />
                                ))}
                            </ul>
                        ) : (
                            <p>{`No trips found!`}</p>
                        )}
                    </div>
                </div>
                <div id='past-trips-section-container'>
                    <h3>Past trips</h3>
                    <div className="trips-container">
                        
                        {pastTrips.length > 0 ? (
                            <>
                                <ul>
                                    {pastTrips.map(trip => (
                                        <TripTile key={trip._id} trip={trip} />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>{`No past trips found!`}</p>
                        )}
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default UserPage;