import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function MainPage() {

    const [searchObj, setSearchObj] = useState({
        
    })
    
    function handleSearch(){

    }
    
    return (
        <div>
            <div id="splash-header">
                <h1>Travel with confidence, not guesswork.</h1>
                <h2>Craft, refine, and navigate your adventures using real itineraries from fellow travelers</h2>
            </div>
            <div id="splash-search">
                <input type="text"/>
                <div id="splash-search-date-range">
                    <input type="date"/>
                    <input type="date"/>
                </div>
                <div classname="myButton small-button">Start Planning</div>
            </div>
        </div>
        
    );
}

export default MainPage;