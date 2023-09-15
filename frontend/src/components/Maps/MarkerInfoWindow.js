
import {Marker, InfoWindow} from '@react-google-maps/api';
import { useState } from 'react';

const MarkerInfoWindow = ({position, place}) => {

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