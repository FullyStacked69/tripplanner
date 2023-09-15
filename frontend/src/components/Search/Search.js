import { useState, useRef, useEffect } from "react";
import { Autocomplete, } from '@react-google-maps/api';


const Search = ({index, itObj, setItObj, map, setMarkersPositions, markersPositions, setCenter, setInfo, setActivities}) => {

    
    // const [position, setPosition] = useState(/** @type google.maps.Map */(null))
    // const [map, setMap] = useState(null);
    const [locations, setLocations] = useState([{value: ''}]);
    const [directionRes, setDirectionRes] = useState(null);
    const [inputValue, setInputValue] = useState("");

    // const [distance, setDistance] = useState('');
    // const [duration, setDuration] = useState('');
    const originRef = useRef();
    const destinationRef = useRef();
    const originAutocompleteRef = useRef();
    const destinationAutocompleteRef = useRef();


    

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

    // const onDestinationPlaceChanged = () => {
    //     const place = destinationAutocompleteRef.current.getPlace();
    //     if (place.geometry && place.geometry.location) {
    //         map.panTo(place.geometry.location);
    //         map.setZoom(10);
    //         // const newPosition = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
    //         setMarkersPositions([...markersPositions, place]);
    //     }
    // };

    // async function calculateRoute() {
    //     if(originRef.current.value === '' || destinationRef.current.value === '') {
    //         return;
    //     }

    //     const directionsService = new window. google.maps.DirectionsService();

    //     const results = await directionsService.route({
    //         origin: originRef.current.value,
    //         destination: destinationRef.current.value,
    //         travelMode: window.google.maps.TravelMode.DRIVING  //could make it interactive
    //     });

    //     setDirectionRes(results);
    //     setDistance(results.routes[0].legs[0].distance.text);
    //     setDuration(results.routes[0].legs[0].duration.text);
    // }

    const handleLocationChange = (index, newValue) => {
        const updatedLocations = [...locations];
        updatedLocations[index].value = newValue;
        setLocations(updatedLocations);
    }

    const addLocation = () => {
        setLocations([...locations, { value: ''}]);
        originAutocompleteRef.current.push(null)
        
    }

    // const clearRoute = () => {
        // setDirectionRes(null);
        // setDistance('');
        // setDuration('');
        // originRef.current.value = '';
        // destinationRef.current.value = '';
        // setMarkersPositions([]);
    // }



    // const handleSelect = async (address) => {

    // } 

    return (
        <>  
            {/* <DirectionsRenderer directions={directionRes}  /> */}
            <div>
                <Autocomplete 
                    onLoad={(ref) => originAutocompleteRef.current = ref}
                    onPlaceChanged={onOriginPlaceChanged}
                 >
                <input type="text" placeholder="Add a place" ref={originRef} value={inputValue} onChange={e => setInputValue(e.target.value)} />
                </Autocomplete>
                
                {/* <Autocomplete 
                    onLoad={(ref) => destinationAutocompleteRef.current = ref}
                    onPlaceChanged={onDestinationPlaceChanged}
                 >
                <input type="text" placeholder="Destination" ref={destinationRef} />
                </Autocomplete>  */}
            </div>

            <div>
                {/* <p>Distance: {distance} </p> */}
                {/* <p>Duration: {duration} </p> */}
                {/* <button type="submit" onClick={calculateRoute}>Calculate Route</button>
                {map && (
                    <button type="button" onClick={() => { map.panTo(new window.google.maps.LatLng(originRef.current.value)); map.setZoom(10); }}>Pan to Origin</button>
                )} */}
                {/* <button type="button" onClick={clearRoute}>Clear Route</button> */}
            </div>
        </>
    )
}

export default Search;