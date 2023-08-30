// import { useState, useEffect, useRef } from "react";
// import {GoogleMapsProvider, useGoogleMap} from '@ubilabs/google-maps-react-hooks'
// // import { useMemo } from "react";
// // import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// // import {getGeocode, getLatLng} from "use-places-autocomplete";
// // import usePlacesAutocomplete from "use-places-autocomplete";
// // import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

// const mapOptions = {
//     zoom: 12,
//     center: {
//         lat: 37.08,
//         lng:-120.02,
//     },
// };

// export default function Places() {
//     const [mapContainer, setMapContainer] = useState(null); 

//     return (
//         <GoogleMapsProvider
//             googleMapsAPIKey = {process.env.REACT_APP_MAPS_API_KEY}
//             options={mapOptions}
//             mapContainer={mapContainer}
//         >
//             <div ref={(node) => setMapContainer(node)} style={{height: "50vh", width: '80vh'}} />

//         </GoogleMapsProvider>
//     )
// }

// function Location() {
//     const [lat, setLat] = useState(43.68);
//     const [lng, setLng] = useState(-120.2);


//     return(
//         <div className="lat-lng">
//             <input
//                 type="number"
//                 value={lat}
//                 onChange={(e) => setLat(parseFloat(e.target.value))}
//                 step={0.01}
//              />
//                 <input
//                 type="number"
//                 value={lng}
//                 onChange={(e) => setLng(parseFloat(e.target.value))}
//                 step={0.01}
//              />

//         </div>
//         ) 
// }

