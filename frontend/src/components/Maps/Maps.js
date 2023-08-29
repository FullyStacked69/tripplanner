import { useState, useEffect, useRef } from "react";
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from '@react-google-maps/api';
import './Maps.css'



export default function Places() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries: ['places'],
    })
    const center = {lat: 37.4245, lng: -122.0782}
    const [position, setPosition] = useState(null)


    if (!isLoaded) {return (<div>Loading...</div>)}

    return (
        <GoogleMap 
        center={center}
        zoom={10}
        mapContainerClassName="map-container"
        >
            <Marker position={center} />
            {/* <Marker position={{lat:37.96, lng:-122.0296}} /> */}
        </GoogleMap>
    )




}
