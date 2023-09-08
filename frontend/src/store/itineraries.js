import jwtFetch from './jwt';

const RECEIVE_ITINERARIES = "itineraries/RECEIVE_ITINERARIES";
const RECEIVE_ITINERARY = "itineraries/RECEIVE_ITINERARY";
export const SET_IT_OBJ = 'itineraries/SET_IT_OBJ'

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

export const setItObj = itinerary => ({
    type: SET_IT_OBJ,
    itinerary
}
)
const itinerariesReducer = (state = {
    all: {},
    itObj: {}
}, action) => {

    let nextState;

    switch (action.type) {
        case RECEIVE_ITINERARY:
            return {...state, all: {...state.all, [action.itinerary._id]: action.itinerary}}
        case RECEIVE_ITINERARIES:
            nextState = {
                all: {},
                itObj: {}
            };
            action.itineraries.forEach( itinerary => {
                nextState.all[itinerary._id] = itinerary
            })
            return nextState;
        case SET_IT_OBJ:
            nextState = {...state};
            nextState.itObj = action.itinerary
            return nextState
        default:
            return state;
    }
};

export default itinerariesReducer;
