import { useState, useRef, useEffect } from "react";
import { Autocomplete, } from '@react-google-maps/api';


const Search = ({index, itObj, setItObj, map, setMarkersPositions, markersPositions, setCenter, setInfo, setActivities}) => {

    
 
    const [locations, setLocations] = useState([{value: ''}]);
    const [inputValue, setInputValue] = useState("");
    const originRef = useRef();
    const originAutocompleteRef = useRef();


    const onOriginPlaceChanged = () => {
        const place = originAutocompleteRef.current.getPlace();
        if (place.geometry && place.geometry.location) {
            // debugger
            map.panTo(place.geometry.location);
            map.setZoom(10);
            // const newPosition = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
            setMarkersPositions([...markersPositions, place]);
            // console.log('MarkerPos', markersPositions)
            setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
            setInfo(place);
            setInputValue("");
            // setActivities(place)
            

        }
    };

   
    const handleLocationChange = (index, newValue) => {
        const updatedLocations = [...locations];
        updatedLocations[index].value = newValue;
        setLocations(updatedLocations);
    }

    const addLocation = () => {
        setLocations([...locations, { value: ''}]);
        originAutocompleteRef.current.push(null)
        
    }



    return (
        <>  
  
            <div>
                <Autocomplete 
                    onLoad={(ref) => originAutocompleteRef.current = ref}
                    onPlaceChanged={onOriginPlaceChanged}
                 >
                <input type="text" placeholder="Add an activity (tourist attractions, restaurants, accommodations, etc)" ref={originRef} value={inputValue} onChange={e => setInputValue(e.target.value)} />
                </Autocomplete>
                
            </div>

            <div>
    
            </div>
        </>
    )
}

export default Search;