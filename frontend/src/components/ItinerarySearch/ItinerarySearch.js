import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchObjRedux } from "../../store/searchObj"
import { LockPlugin, RangePlugin, easepick } from "@easepick/bundle"
import './ItinerarySearch'
import { fetchItineraryByTitle, setItObj, updateItinerary } from "../../store/itineraries"
import { login } from '../../store/session';
import { useHistory } from 'react-router-dom';


export default function ItinerarySearch({ location: propLocation, startDate: propStartDate, endDate: propEndDate, isMainPage }) {
    const dispatch = useDispatch()
    const history = useHistory();
    const searchObjRedux = useSelector(state => state.searchObj)
    const itObj = useSelector(state => state.itineraries.itObj);
    const {searching} = searchObjRedux


    const buttonText = isMainPage ? "Start Planning" : "Search";

    useEffect(()=>{
        dispatch(setSearchObjRedux({...searchObjRedux, searching: false}))
    },[])

    const [searchObj, setSearchObj] = useState({
        location: propLocation || '',
        country: '',
        startDate: propStartDate || '',
        endDate: propEndDate || '',
        searching: false
    });    

    const [foundLocos, setFoundLocos] = useState([])
    const [searchBarFocus, setSearchBarFocus] = useState(false)
    
    const [searchErrors, setSearchErrors] = useState({
        year: '',
        location: ''
    })
    
    function handleSearch(){
        const locationExists = foundLocos.some(loco => loco.name === searchObj.location);
    
        if(!locationExists){
            setSearchErrors(prev => ({...prev, location: 'Location not found'}));
            return; // Stop the function from proceeding further
        }
    
        if(searchObj.location){
            if(searchObj.startDate && searchObj.endDate){
                setSearchObj(prev => ({...prev, searching: true}))
            } else {
                setSearchErrors({...searchErrors, year: 'Please enter a date range'})
            } 
        } else {
            setSearchErrors({...searchErrors, location: 'Please enter a valid location'})
        }
    }    

    const handleInputChange = async e => {
        await setSearchObj(prev => ({...prev, location: e.target.value}))
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
            <div 
                onMouseDown={() => {
                    setSearchObj({...searchObj, lat: loco.lat, lng: loco.lng, location: loco.name, country: (loco.country || loco.code)});
                    setSearchErrors(prev => ({...prev, location: ''})); // Reset the location error
                }} 
                className='loco-opt'
                key={`${loco.name}-${loco.country || loco.code}`}
            >
                <h3>{loco.name}, {loco.country || loco.code}</h3>
                {(loco.country && <h3>City</h3>) || <h3>Country</h3>}
            </div>
        )
    }    

    function getCurrentISODate() {
        const today = new Date();
        return today.toISOString();  // Returns the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    
    useEffect(() => {
        const minDateToday = getCurrentISODate();
        const picker = new easepick.create({
            element: "#trip-start",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
            ],
            LockPlugin: {
                minDate: "2023-08-31T00:00:00.000Z"
            },
            RangePlugin: {
                tooltip: true,
                elementEnd: "#trip-end"
            },
            LockPlugin: {
                minDate: minDateToday
            },
            setup(picker) {
                picker.on('select', e => {
                    setSearchObj(prev => ({...prev, startDate: e.detail.start, endDate: e.detail.end}))
                    
                })
            },
            format: "DD MMM YYYY",
            plugins: [RangePlugin, LockPlugin],
        });

        // Clean up the picker instance on component unmount
        return () => {
            picker.destroy();
        };
    }, []);

    useEffect(()=> {
        if(searchObj.lat){
            dispatch(setSearchObjRedux(searchObj))
        }
    }, [searchObj])

    const handleDemo = () => {
        dispatch(login({ email: 'seed1@seed.com', password: 'password' }));
        dispatch(fetchItineraryByTitle("4 days in the Big Apple"))
            .then(itinerary => {
                // Update the fetched itinerary with additional keys
                const updatedItinerary = {
                    ...itinerary,
                    location: 'New York City',
                    lat: '40.712776',
                    lng: '-74.005974',
                    searching: false,
                    startDate: new Date('2024-02-26T00:00:00.000Z'),
                    endDate: new Date('2024-02-29T00:00:00.000Z')
                    // Add other properties as needed
                };
                // updatedItinerary.startDate = new Date('2024-02-26T00:00:00.000Z');
                // updatedItinerary.endDate = new Date('2024-02-29T00:00:00.000Z');

                // Dispatch the setItObj action to set the updated itinerary in the itineraries slice of the state
                dispatch(setItObj(updatedItinerary));
                
                // Redirect to '/itineraries/new/plan' after updating itObj
                history.push('/itineraries/new/plan');
            })
            .catch(err => {
                console.error('Error fetching itinerary', err);
            });

    }
    
    return(
        <div id="splash-search">
            <div id='loco-search-holder'>
                <input 
                    className="custom-input" 
                    placeholder={propLocation || "Where to?"}
                    onFocus={e => setSearchBarFocus(true)} 
                    onBlur={e => setSearchBarFocus(false)} 
                    value={searchObj.location} 
                    onChange={e=> handleInputChange(e)} 
                    type="text"/>
                <div className={searchBarFocus ? 'loco-opt-holder' : 'loco-opt-holder loco-opt-holder-no-border'}>
                    {(searchBarFocus && foundLocos) && foundLocos.map(loco => LocoOpt(loco))}
                </div>
                {!isMainPage && searchErrors.location && 
                <div className='search-errors'>{searchErrors.location}</div>}
            </div>
            <div id="splash-search-date-range">
                <input 
                    placeholder={propStartDate ? formatDate(propStartDate) : "Start date"}
                    id="trip-start" 
                />
                <input 
                    placeholder={propEndDate ? formatDate(propEndDate) : "End date"}
                    id="trip-end" 
                />
                {!isMainPage && searchErrors.year && 
                <div className='search-errors'>{searchErrors.year}</div>}
            </div>
            {isMainPage && 
                <div className='search-errors'>
                    {searchErrors.location && <div>{searchErrors.location}</div>}
                    {searchErrors.year && <div>{searchErrors.year}</div>}
                </div>}
            <div id="main-page-bttn-container">
                <button onClick={()=>handleSearch()} className="myButton small-button">{buttonText}</button>

                <p>or</p>

                {isMainPage && 
                    < a onClick={() => handleDemo()} className="demo-button">Log in with our demo user</a>
                }
            </div>
        </div>
    )
}