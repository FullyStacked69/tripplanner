// import { useState, useEffect, useRef, usePlacesAutocomplete } from "react";
// import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
// import './Maps.css'



// export default function Places() {
//     const {isLoaded} = useJsApiLoader({
//         googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
//         libraries: ['places'],
//     })
    
//     const center = {lat: 37.4245, lng: -122.0782}
//     if (!isLoaded) {return (<div>Loading...</div>)}
    
    
//     return (
//         <>
//             <Search />
//             <GoogleMap 
//             center={center}
//             zoom={10}
//             mapContainerClassName="map-container"
//             >
//                 <Marker position={center} />
//                 {/* <Marker position={{lat:37.96, lng:-122.0296}} /> */}
//             </GoogleMap>
//         </>
//         )
//     }
    
    
//     const Search = () => {
        
//         // const [position, setPosition] = useState(/** @type google.maps.Map */(null))
//         const [map, setMap] = useState(null);
//         const [directionRes, setDirectionRes] = useState('');
//         const [distance, setDistance] = useState('');
//         const [duration, setDuration] = useState('');

//     const originRef = useRef()
//     const destinationRef = useRef()

//     async function calculateRoute() {
//         if(originRef.current.value === '' || destinationRef.current.value === '') {
//             return;
//         }

//         const directionsService = new window. google.maps.DirectionsService();

//         const results = await directionsService.route({
//             origin: originRef.current.value,
//             destination: destinationRef.current.value,
//             travelMode: window.google.maps.TravelMode.DRIVING  //could make it interactive
//         });

//         setDirectionRes(results);
//         setDistance(results.routes[0].legs[0].distance.text);
//         setDuration(results.routes[0].legs[0].duration.text);
//     }

//     const clearRoute = () => {
//         setDirectionRes(null);
//         setDistance('');
//         setDuration('');
//         originRef.current.value = '';
//         destinationRef.current.value = ';'
//     }



//     // const handleSelect = async (address) => {

//     // } 

//     return (
//         <>  
//             <DirectionsRenderer directions={directionRes}  />
//             <div>
//                 <Autocomplete>
//                 <input type="text" placeholder="Origin" ref={originRef} />
//                 </Autocomplete>

//                 <Autocomplete>
//                 <input type="text" placeholder="Destination" ref={destinationRef} />
//                 </Autocomplete>
//             </div>

//             <div>
//                 <p>Distance: {distance} </p>
//                 <p>Duration: {duration} </p>
//                 <button type="submit" onClick={calculateRoute}>Calculate Route</button>
//                 {map && (
//                     <button type="button" onClick={() => { map.panTo(new window.google.maps.LatLng(originRef.current.value)); map.setZoom(10); }}>Pan to Origin</button>
//                 )}
//             </div>
//         </>
//     )
// }
