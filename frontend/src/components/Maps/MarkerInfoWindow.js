
import {Marker, InfoWindow} from '@react-google-maps/api';
import { useState } from 'react';

const MarkerInfoWindow = ({position, place}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        // <>

        //     <Marker  position={position}  onClick={() => setIsOpen(true)}/>
        //         { isOpen &&  <InfoWindow  position={{lat:position.lat, lng:position.lng }} onCloseClick={() => setIsOpen(false)}>
        //             <div>
        //                 <h3>{place?.name}</h3>
        //                 {/* <p>{place.formatted_address}</p> */}
        //                 <p>{place?.address}</p>
        //                 <p>{place?.phone}</p>
        //                 {/* <p>{place.current_opening_hours.weekday_text}</p> */}
        //                 {place?.rating && <p>Rating: {place?.rating}({place?.user_ratings_total})</p>}
        //                 {/* <p>Review: {place.reviews[0].text}</p> */}
        //                 {/* <img src={place.photos[0].getUrl()}   /> */}

        //                 {/* <p> name, address, rating, opening</p> */}
        //             </div>

        //         </InfoWindow>}
        // </>
        
        <>
            <Marker 
                // key={idx} 
                position={position}  
                onClick={() => setIsOpen(true)}
                >
                {isOpen && 
                    <InfoWindow onCloseClick={() => setIsOpen(false)}>
                        <div>
                            <h3>{place?.name}</h3>
                            <p>{place?.address}</p>
                            <p>{place?.formatted_phone_number}</p>
                            {place?.rating && <p>Rating: {place?.rating}</p>}
                        </div>
                    </InfoWindow>
                }
            </Marker>
    </>

    )
}

export default MarkerInfoWindow;