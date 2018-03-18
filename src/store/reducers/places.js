import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE,
} from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const places = state.places.concat({
                key: new Date().valueOf(),
                text: action.payload,
                image: {
                    uri: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502',
                },
            }),
            
            return {
                ...state,
                places,
            };
            
        case DELETE_PLACE:
            const places = state.places.filter(place => place.key !== state.selectedPlace.key);
            
            return {
                ...state,
                places,
                selectedPlace: null,
            };
            
        case SELECT_PLACE:
            const selectedPlace = state.places.find(place => place.key === action.payload);
        
            return {
                ...state,
                selectedPlace,
            };
            
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null,
            };
            
        default:
            return state;
    }
};

export default reducer;
