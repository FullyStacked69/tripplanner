

import jwtFetch from './jwt';

const RECEIVE_ITINERARIES = "itineraries/RECEIVE_ITINERARIES";

const receiveItineraries = itineraries => ({
    type: RECEIVE_ITINERARIES,
    itineraries
});

export const fetchItineraries = location => async dispatch => {
    try {
        const res = await jwtFetch(`/api/itineraries?location=${location}`);
        const itineraries = await res.json();
        dispatch(receiveItineraries(itineraries));
    } catch (err) {
        console.error('Error fetching itineraries:', err);
    }
};

export const fetchItinerary = itineraryId => async dispatch => {
    try{
        const res = await fetch(`/api/itineraries?itineraryId=${itineraryId}`)
        return await res.json()
    } catch (err){
        console.error('Error fetching itinerary', err)
    }
}

export const createItinerary = itinerary => async dispatch => {
    try{
        const res = await jwtFetch("/api/itineraries", {
            method: "POST",
            body: JSON.stringify(itinerary)
        })
        return res
    }catch (err){
        console.error('Error creating itinerary')
    }
}

const itinerariesReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITINERARIES:
            return action.itineraries;
        default:
            return state;
    }
};

export default itinerariesReducer;
