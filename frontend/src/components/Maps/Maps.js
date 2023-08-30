import { useState, useRef, } from "react";
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, InfoWindow, StandaloneSearchBox, useLoadScript} from '@react-google-maps/api';
import './Maps.css'



export default function Places() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries: ['places'],
    })
    
    const center = {lat: 37.4245, lng: -122.0782}
    const [map, setMap] = useState(null);
    
    const markers = [];
    // const infoWindow = new window.google.maps.InfoWindow()
    // console.log(infoWindow)
    if (!isLoaded) {return (<div>Loading...</div>)}
    
    
    console.log("check", map)

    
    
    const onLoad = (location) => {
        setMap(location)
        // console.log("onload",map)
    }
    
    
    return (
        <>
            <Search map={map}/>
            <GoogleMap 
            onLoad={onLoad}
            // ref={mapRef}
            center={center}
            zoom={10}
            mapContainerClassName="map-container"
            >
                <Marker position={center} />
                {/* <Marker position={{lat:37.96, lng:-122.0296}} /> */}
            </GoogleMap>
        </>
        )
    }
    
    
    const Search = ({map}) => {
        console.log(map)
        
        // const [position, setPosition] = useState(/** @type google.maps.Map */(null))
        // const [map, setMap] = useState(null);
        const [directionRes, setDirectionRes] = useState(null);
        const [distance, setDistance] = useState('');
        const [duration, setDuration] = useState('');
        const originRef = useRef();
        const destinationRef = useRef();
        const originAutocompleteRef = useRef();
        const destinationAutocompleteRef = useRef();

        const onOriginPlaceChanged = () => {
            const place = originAutocompleteRef.current.getPlace();
            if (place.geometry && place.geometry.location) {
                // debugger
                map.panTo(place.geometry.location);
                map.setZoom(15);
            }
        };
    
        const onDestinationPlaceChanged = () => {
            const place = destinationAutocompleteRef.current.getPlace();
            if (place.geometry && place.geometry.location) {
                map.panTo(place.geometry.location);
                map.setZoom(10);
            }
        };

        async function calculateRoute() {
            if(originRef.current.value === '' || destinationRef.current.value === '') {
                return;
            }

            const directionsService = new window. google.maps.DirectionsService();

            const results = await directionsService.route({
                origin: originRef.current.value,
                destination: destinationRef.current.value,
                travelMode: window.google.maps.TravelMode.DRIVING  //could make it interactive
            });

            setDirectionRes(results);
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].duration.text);
        }

        const clearRoute = () => {
            setDirectionRes(null);
            setDistance('');
            setDuration('');
            originRef.current.value = '';
            destinationRef.current.value = ''
        }



        // const handleSelect = async (address) => {

        // } 

        return (
            <>  
                <DirectionsRenderer directions={directionRes}  />
                <div>
                    <Autocomplete 
                        onLoad={(ref) => originAutocompleteRef.current = ref}
                        onPlaceChanged={onOriginPlaceChanged}
                     >
                    <input type="text" placeholder="Add a place" ref={originRef} />
                    </Autocomplete>
                    
                    <Autocomplete 
                        onLoad={(ref) => destinationAutocompleteRef.current = ref}
                        onPlaceChanged={onDestinationPlaceChanged}
                     >
                    <input type="text" placeholder="Destination" ref={destinationRef} />
                    </Autocomplete> 
                </div>

                <div>
                    <p>Distance: {distance} </p>
                    <p>Duration: {duration} </p>
                    <button type="submit" onClick={calculateRoute}>Calculate Route</button>
                    {map && (
                        <button type="button" onClick={() => { map.panTo(new window.google.maps.LatLng(originRef.current.value)); map.setZoom(10); }}>Pan to Origin</button>
                    )}
                    <button type="button" onClick={clearRoute}>Clear Route</button>
                </div>
            </>
        )
}
