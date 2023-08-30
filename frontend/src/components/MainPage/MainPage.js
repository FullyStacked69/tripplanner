import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ItineraryList from '../ItineraryList/ItineraryList';
import './MainPage.css'

function MainPage() {

    const [searchObj, setSearchObj] = useState({
        location: '',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString()
    })

    const [foundLocos, setFoundLocos] = useState([])
    const [searchBarFocus, setSearchBarFocus] = useState(false)
    const [searching, setSearching] = useState(false)
    
    function handleSearch(){
        if(searchObj.location){
            setSearching(true)
        }
    }

    const handleInputChange = async e => {
        await setSearchObj({...searchObj, location: e.target.value})
        if(e.target.value){
            const res = await fetch(`/api/locations?location=${e.target.value}`)
            let data = await res.json()
            setFoundLocos(data.splice(0, 10))
        } else {
            setFoundLocos([])
        }
    }

    function LocoOpt(loco){       
        return(
            <div onMouseDown={() => setSearchObj({...searchObj, location: loco.name})} className='loco-opt'>
                <h3>{loco.name}</h3>
                {(loco.country && <h3>City</h3>) || <h3>Country</h3>}
            </div>
        )
    }
    
    return (
        <div id='content-container'>
            <div id="splash-header">
                <h1>Travel with confidence, not guesswork.</h1>
                <h2>Craft, refine, and navigate your adventures using real itineraries from fellow travelers</h2>
            </div>
            <div id="splash-search">
                <div id='loco-search-holder'>
                    <input onFocus={e => setSearchBarFocus(true)} onBlur={e => setSearchBarFocus(false)} value={searchObj.location} onChange={e=> handleInputChange(e)} type="text"/>
                    <div className='loco-opt-holder'>
                        {(searchBarFocus && foundLocos) && foundLocos.map(loco => LocoOpt(loco))}
                    </div>
                </div>
                <div id="splash-search-date-range">
                    <input type="date" value={searchObj.startDate} onChange={e=>setSearchObj({...searchObj, startDate: e.target.value})}/>
                    <input type="date" value={searchObj.endDate} onChange={e=> {if(e.target.value > searchObj.startDate)setSearchObj({...searchObj, endDate: e.target.value})}} />
                </div>
                <button onClick={()=>handleSearch()} className="myButton small-button">Start Planning</button>
            </div>
            {searching && <ItineraryList searchObj={searchObj}/>}
        </div>
        
    );
}

export default MainPage;