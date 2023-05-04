import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'Offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    case 'GO_ONLINE':
      return {
        ...state,
        status: state.status === 'Offline' ? 'Online' : 'Offline',
      };
    default:
      return state
  }
};

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'LIGHT_MODE' })
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'GO_ONLINE' })
});

store.subscribe(() => {
  const { status, theme } = store.getState();
  const body = document.getElementById('body-element');
  document.getElementById('status').innerHTML = status;
  if (theme === 'light') {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
    themeButton.innerHTML = 'Dark Mode';
  } else {
    body.style.backgroundColor = '#333333';
    body.style.color = '#ffffff';
    themeButton.innerHTML = 'Light Mode';
  };
  if (status === 'Offline') {
    statusButton.innerHTML = 'Ficar online';
  } else {
    statusButton.innerHTML = 'Ficar offline';
  };
});