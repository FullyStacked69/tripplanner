import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ItineraryList from '../ItineraryList/ItineraryList';
import './MainPage.css'
import Markers from '../Maps/Markers';


function MainPage() {


    const [searchObj, setSearchObj] = useState({
        location: '',
        country: '',
        startDate: '',
        endDate: ''
    })

    const [foundLocos, setFoundLocos] = useState([])
    const [searchBarFocus, setSearchBarFocus] = useState(false)
    const [searching, setSearching] = useState(false)

    const [searchErrors, setSearchErrors] = useState({
        year: '',
        location: ''
    })
    
    function handleSearch(){
        if(searchObj.location){
            if(searchObj.startDate && searchObj.endDate){
                setSearching(true)
            } else if (searchObj.startDate){
                setSearchErrors({...searchErrors, year: 'Please enter an end date'})
            }
        } else {
            setSearchErrors({...searchErrors, location: 'Please enter a valid location'})
        }
    }

    const handleInputChange = async e => {
        await setSearchObj({...searchObj, location: e.target.value})
        if(e.target.value){
            const res = await fetch(`/api/locations?location=${e.target.value}`)
            let data = await res.json()
            setFoundLocos(data.sort((loco1, loco2)=>{
                if(loco1.pop && loco2.pop){
                    return loco2.pop - loco1.pop
                } else if( loco1.pop ) {
                    return -1
                } else if (loco2.pop){
                    return 1
                } else {
                    return 0
                }
            }).splice(0, 10))
        } else {
            setFoundLocos([])
        }
    }

    function LocoOpt(loco){       
        return(
            <div onMouseDown={() => setSearchObj({...searchObj, location: loco.name, country: (loco.country || loco.code)})} className='loco-opt'>
                <h3>{loco.name}</h3>
                {(loco.country && <h3>City</h3>) || <h3>Country</h3>}
                <h3>{loco.country || loco.code}</h3>
            </div>
        )
    }
    
    return (
        <div id='content-container'>
            <div id='splash-section'>
                <div id='splash-content'>
                    <div id="splash-header">
                        <h1>Travel with confidence, not guesswork.</h1>
                        <h3>Craft, refine, and navigate your adventures using real itineraries from fellow travelers</h3>
                    </div>
                    <div id="splash-search">
                        <div id='loco-search-holder'>
                            <input className="custom-input" placeholder="Where to?" onFocus={e => setSearchBarFocus(true)} onBlur={e => setSearchBarFocus(false)} value={searchObj.location} onChange={e=> handleInputChange(e)} type="text"/>
                            <div className='loco-opt-holder'>
                                {(searchBarFocus && foundLocos) && foundLocos.map(loco => LocoOpt(loco))}
                            </div>
                        </div>
                        <div id="splash-search-date-range">
                            <input type="date" value={searchObj.startDate} onChange={e=>setSearchObj({...searchObj, startDate: e.target.value})}/>
                            <input type="date" value={searchObj.endDate} onChange={e=> {if(e.target.value > searchObj.startDate)setSearchObj({...searchObj, endDate: e.target.value})}} />
                        </div>
                        <button onClick={()=>handleSearch()} className="myButton small-button">Start Planning</button>
                        <div className='search-errors'>
                            {searchErrors.location && <div>{searchErrors.location}</div>}
                            {searchErrors.year && <div>{searchErrors.year}</div>}
                        </div>
                    </div>
                </div>
            </div>

            {searching && <ItineraryList searchObj={searchObj}/>}

        </div>

        
    );
}

export default MainPage;