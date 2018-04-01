import {
    ADD_PLACE,
    DELETE_PLACE,
    // SELECT_PLACE,
    // DESELECT_PLACE,
} from './actionTypes'

export const addPlace = (placeName, location) => {
    return {
        type: ADD_PLACE,
        payload: placeName,
        location,
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        payload: key,
    };
};

// export const selectPlace = (key) => {
//     return {
//         type: SELECT_PLACE,
//         payload: key,
//     };
// };
// 
// export const deselectPlace = () => {
//     return {
//         type: DESELECT_PLACE,
//     };
// };
