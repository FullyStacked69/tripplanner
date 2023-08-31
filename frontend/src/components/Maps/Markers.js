import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Markers = () => {
  const places = [
    "Statue of Liberty, New York",
    "Hyatt Hotel, San Francisco",
  ];

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    Promise.all(
      places.map(place => 
        new Promise((resolve, reject) => {
          service.findPlaceFromQuery({
            query: place,
            fields: ['geometry'],
          }, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              resolve(results[0].geometry.location);
            } else {
              reject(new Error('Could not find place: ' + status));
            }
          });
        })
      )
    ).then(geolocations => {
      setLocations(geolocations);
    });
  }, [places]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        zoom={10}
        center={locations[0] || { lat: 0, lng: 0 }}  // Default center if locations is empty
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Markers;
