import jwtFetch from './jwt';

// Action Types
const LIKE_ITINERARY = 'likes/LIKE_ITINERARY';
const UNLIKE_ITINERARY = 'likes/UNLIKE_ITINERARY';

// Action Creators
const likeItinerary = itineraryId => ({
    type: LIKE_ITINERARY,
    itineraryId
});

const unlikeItinerary = itineraryId => ({
    type: UNLIKE_ITINERARY,
    itineraryId
});

// Thunk action to like an itinerary
export const likeItineraryAsync = itineraryId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/itineraries/${itineraryId}/like`, {
            method: 'POST',
        });

        if (res.ok) {
            dispatch(likeItinerary(itineraryId));
        } else {
            // Handle error here if needed
        }
    } catch (err) {
        console.error('Error liking itinerary:', err);
    }
};

// Thunk action to unlike an itinerary
export const unlikeItineraryAsync = itineraryId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/itineraries/${itineraryId}/like`, {
            method: 'DELETE',
        });

        if (res.ok) {
            dispatch(unlikeItinerary(itineraryId));
        } else {
            // Handle error here if needed
        }
    } catch (err) {
        console.error('Error unliking itinerary:', err);
    }
};
