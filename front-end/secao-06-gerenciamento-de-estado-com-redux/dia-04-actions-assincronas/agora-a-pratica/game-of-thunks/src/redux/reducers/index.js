import { actionTypes } from "../actions";

const INITIAL_STATE = {
    isFetching: false,
    character: '',
};

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
            }
        case actionTypes.REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                character: action.character[0],
            }
        case actionTypes.REQUEST_FAILURE:
            return {
                ...state,
                isFetching: false,
                character: action.error,
            }
        default:
            return state;
    }
};

export default gameReducer;