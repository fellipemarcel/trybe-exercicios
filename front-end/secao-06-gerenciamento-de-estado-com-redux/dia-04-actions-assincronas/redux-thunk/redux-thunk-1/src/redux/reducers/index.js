import { combineReducers } from "redux";
import { actionTypes } from "../actions";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (actionTypes.ADD_EMAIL) {
        default: 
            return state;
    }
};

const rootReducer = combineReducers({ reducer });

export default rootReducer;