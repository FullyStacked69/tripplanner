import { useSelector } from 'react-redux';
import './UserPage.css';
import TripTile from './TripTile';

function UserPage () {
    const user = useSelector(state => state.session.user);
    const itineraries = useSelector(state => Object.values(state.itineraries));
    const userTrips = itineraries.filter(itinerary => itinerary.author._id === user._id);

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

    return (
        <div id='user-page-container'>
            <div id='user-page-content-container'>
                <div id='user-page-headers'>
                    <h2>Hi, {user.username}!</h2>
                    <p>View your upcoming or past trips on this page</p>
                </div>
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