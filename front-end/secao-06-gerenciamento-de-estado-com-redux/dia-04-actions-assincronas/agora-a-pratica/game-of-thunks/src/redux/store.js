import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import gameReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    gameReducer, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;