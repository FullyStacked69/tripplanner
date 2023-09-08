

import jwtFetch from './jwt';

const RECEIVE_ITINERARIES = "itineraries/RECEIVE_ITINERARIES";
const RECEIVE_ITINERARY = "itineraries/RECEIVE_ITINERARY";


const receiveItineraries = itineraries => ({
    type: RECEIVE_ITINERARIES,
    itineraries
});
const receiveItinerary = itinerary => ({
    type: RECEIVE_ITINERARY,
    itinerary
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
        const itinerary = await res.json();
        console.log(itinerary)
        await dispatch(receiveItinerary(itinerary));
        return itinerary;
    } catch (err){
        console.error('Error fetching itinerary', err)
    }
}

const itinerariesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ITINERARY:
            return {...state, [action.itinerary._id]: action.itinerary}
        case RECEIVE_ITINERARIES:
            // debugger
            const nextState = {...state};
            action.itineraries.forEach( itinerary => {
                nextState[itinerary._id] = itinerary
            })
            return nextState;
        default:
            return state;
    }
};

export default itinerariesReducer;
