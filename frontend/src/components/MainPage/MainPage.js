import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ItineraryList from '../ItineraryList/ItineraryList';

function MainPage() {

    const [searchObj, setSearchObj] = useState({
        location: '',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString()
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
                <input value={searchObj.location} onChange={e=>setSearchObj({...searchObj, location: e.target.value})} type="text"/>
                <div id="splash-search-date-range">
                    <input type="date" value={searchObj.startDate} onChange={e=>setSearchObj({...searchObj, startDate: e.target.value})}/>
                    <input type="date" value={searchObj.endDate} onChange={e=> {if(e.target.value > searchObj.startDate)setSearchObj({...searchObj, endDate: e.target.value})}} />
                </div>
                <div onClick={()=>handleSearch()} className="myButton small-button">Start Planning</div>
            </div>
        </div>
        
    );
}

export default MainPage;