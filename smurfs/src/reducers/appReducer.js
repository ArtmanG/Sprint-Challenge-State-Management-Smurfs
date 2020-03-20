import { GET_SMURFS, UPDATE_SMURFS, SET_ERROR, ADD_SMURF, DELETE_SMURF } from "../actions";

const initialState = {
    smurfs: [],
    isFetchingData: false,
    isPostingData: false,
    isDeletingData: false,
    error: ''
};

export const appReducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            };

        case UPDATE_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            };

        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }

        case ADD_SMURF:
            return {
                ...state,
                isPostingData: true
            }

        case DELETE_SMURF:
            return {
                ...state,
                isDeletingData: true
            }

        default:
            return state;
    }
};