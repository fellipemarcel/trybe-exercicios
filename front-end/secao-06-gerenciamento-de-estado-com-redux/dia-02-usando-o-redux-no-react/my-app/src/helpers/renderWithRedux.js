import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from '../redux';
import thunk from 'redux-thunk';

export const renderWithRedux = ( component, { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {}) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  });