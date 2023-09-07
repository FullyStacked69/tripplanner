import { useSelector } from 'react-redux';
import './UserPage.css';
import TripTile from './TripTile';

function UserPage () {
    const user = useSelector(state => state.session.user);
    const upcomingTrips = [
        {title: "Trip to Italy", date: "Sep 9-Sep 18, 2023"},
        {title: "Adventure Lover's New Zealand Trip", date: "Jan 18-Jan 28, 2024"},
    ]

    const pastTrips = [
        {title: "Ultimate Japan Food Tour", date: "Mar 31-April 18, 2023"},
        {title: "Backpacking Patagonia", date: "Sep 14-Sep 28, 2019"},
        {title: "Island hopping in the Philippines", date: "Jan 18-Jan 28, 2018"},
    ]

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
                            <>
                                <ul>
                                    {upcomingTrips.map(trip => (
                                        <TripTile key={trip._id} trip={trip} />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>{`No upcoming trips found!`}</p>
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