
import {Marker, InfoWindow} from '@react-google-maps/api';
import { useState } from 'react';

const MarkerInfoWindow = ({position,idx, place}) => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>

            <Marker key={idx} position={position}  onClick={() => setIsOpen(true)}/>
            { isOpen &&  <InfoWindow  position={{lat:position.lat, lng:position.lng }} onCloseClick={() => setIsOpen(false)}>
                <div>
                    <h3>{place.name}</h3>
                    <p>{place.formatted_address}</p>
                    <p>{place.formatted_phone_number}</p>
                    {/* <p>{place.current_opening_hours.weekday_text}</p> */}
                    {place.rating && <p>Rating: {place.rating}</p>}
                    {/* <p>Review: {place.reviews[0].text}</p> */}
                    {/* <img src={place.photos[0].getUrl()}   /> */}

                    {/* <p> name, address, rating, opening</p> */}
                </div>

            </InfoWindow>}
        </>)
}

export default MarkerInfoWindow;