import { useSelector } from 'react-redux';
import './UserPage.css';

function UserPage () {
    const user = useSelector(state => state.session.user);

    return (
        <div id='user-page-container'>
            <div id='user-page-content-container'>
                <div id='user-page-headers'>
                    <h2>Hi, {user.username}!</h2>
                    <p>View your upcoming or past reservations on this page</p>
                </div>
                <div id='upcoming-trips-section-container'>
                    <h3>Current or upcoming trips</h3>
                    <div className='trips-container'>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                    </div>
                </div>
                <div id='past-trips-section-container'>
                    <h3>Past trips</h3>
                    <div className='trips-container'>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                        <div className='trip-container'>
                            <div style={{width:"200px", height:"200px", background: "#E7E7E7"}}></div>
                            <h4>Trip Itinerary Title</h4>
                            <p>Sep 9-18, 2023</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default UserPage;