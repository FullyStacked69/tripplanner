
import {Marker, InfoWindow} from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const MarkerInfoWindow = ({position, place, infoWin, setInfoWin}) => {

    const [isOpen, setIsOpen] = useState(false);

    

    return (    
        <>
            <Marker 
                // key={idx} 
                position={position}  
                onClick={() => setIsOpen(true)}
                >
                {isOpen && 
                    <InfoWindow onCloseClick={() => setIsOpen(false)}>
                        <div>
                            <h4>{place?.name}</h4>
                            {/* <p>{place?.address}</p> */}
                            {/* <p>{place?.formatted_phone_number}</p> */}
                            {/* {place?.rating && <p>Rating: {place?.rating}({place?.user_ratings_total})</p>} */}
                        </div>
                    </InfoWindow>
                }
            </Marker>
    </>

    )
}

export default MarkerInfoWindow;