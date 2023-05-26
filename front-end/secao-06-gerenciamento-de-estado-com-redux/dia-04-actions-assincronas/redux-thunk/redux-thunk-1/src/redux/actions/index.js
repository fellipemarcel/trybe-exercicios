export const actionTypes = {
    ADD_EMAIL: '',
};

// Action 1
const requestMoviesStarted = () => ({
    type: 'REQUEST_MOVIES_STARTED',
});

// Action 2
const receiveMovies = (movies) => ({
    type: 'RECEIVE_MOVIES',
    movies,
});

export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch(requestMoviesStarted());
        const response = await fetch('URL da API');
        const movies = await response.json();
        return dispatch(receiveMovies(movies));
    }
};