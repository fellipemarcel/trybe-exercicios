import { legacy_createStore as createStore } from 'redux';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import userReducer from '../reducers/userReducer';

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(userReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
});

export default renderWithRouterAndRedux;
