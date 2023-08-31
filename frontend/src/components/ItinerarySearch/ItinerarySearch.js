import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchObjRedux } from "../../store/searchObj"
import { LockPlugin, RangePlugin, easepick } from "@easepick/bundle"


export default function ItinerarySearch(){
    const dispatch = useDispatch()
    
    const searchObjRedux = useSelector(state => state.searchObj)

    
    const [searchObj, setSearchObj] = useState({
        location: '',
        country: '',
        startDate: '',
        endDate: '',
        searching: false
    })
    useEffect(()=>{
        
    },[searchObj])

    const [foundLocos, setFoundLocos] = useState([])
    const [searchBarFocus, setSearchBarFocus] = useState(false)
    const {searching} = searchObj

    const [searchErrors, setSearchErrors] = useState({
        year: '',
        location: ''
    })
    
    function handleSearch(){
        if(searchObj.location){
            if(searchObj.startDate && searchObj.endDate){
                setSearchObj({...searchObj, searching: true})
                dispatch(setSearchObjRedux(searchObj))
            } else if (searchObj.startDate){
                setSearchErrors({...searchErrors, year: 'Please enter an end date'})
            } else if (!searchObj.startDate && !searchObj.endDate){
                setSearchObj({...searchObj, searching: true})
                dispatch(setSearchObjRedux(searchObj))
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

    function getCurrentISODate() {
        const today = new Date();
        return today.toISOString();  // Returns the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
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
                    setSearchObj({...searchObj, startDate: e.detail.start, endDate: e.detail.end})
                    // console.log(e)
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
    
    return(
        <div id="splash-search">
            <div id='loco-search-holder'>
                <input className="custom-input" placeholder="Where to?" onFocus={e => setSearchBarFocus(true)} onBlur={e => setSearchBarFocus(false)} value={searchObj.location} onChange={e=> handleInputChange(e)} type="text"/>
                <div className='loco-opt-holder'>
                    {(searchBarFocus && foundLocos) && foundLocos.map(loco => LocoOpt(loco))}
                </div>
            </div>
            {/* <input id="datepicker"/> */}
            <div id="splash-search-date-range">
                <input placeholder="Start date" id="trip-start" />
                <input placeholder="End date" id="trip-end" />

            </div>
            <div className='search-errors'>
                {searchErrors.location && <div>{searchErrors.location}</div>}
                {searchErrors.year && <div>{searchErrors.year}</div>}
            </div>
            <button onClick={()=>handleSearch()} className="myButton small-button">Start Planning</button>
        </div>
    )
}