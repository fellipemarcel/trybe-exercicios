import { actionTypes } from "../actions";

const INITIAL_STATE = {
    isFetching: false,
    imageURL: '',
    errorMessage: '',
};

const dogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
                errorMessage: '',
                imageURL: '',
            };
        case actionTypes.REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                imageURL: action.payload,
                errorMessage: '',
            };
        case actionTypes.REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                imageURL: '',
                errorMessage: action.payload,
            };
        default:
            return state;
    };
};

export default dogReducer;