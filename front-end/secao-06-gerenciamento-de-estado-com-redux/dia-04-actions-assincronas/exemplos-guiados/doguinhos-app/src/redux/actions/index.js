export const actionTypes = {
    REQUEST_STARTED: 'REQUEST_STARTED',
    REQUEST_SUCCESSFUL: 'REQUEST_SUCCESSFUL',
    REQUEST_FAILED: 'REQUEST_FAILED',
};

const API_URL = 'https://dog.ceo/api/breeds/image/random';

const requestStarted = () => ({ type: actionTypes.REQUEST_STARTED });

const requestSuccessful = (imageURL) => ({
    type: actionTypes.REQUEST_SUCCESSFUL,
    payload: imageURL,
});

const requestFailed = (error) => ({
    type: actionTypes.REQUEST_FAILED,
    payload: error,
});

export const fetchDogImage = () => {
    return async (dispatch) => {
        dispatch(requestStarted());
        try {
            const response = await fetch(API_URL);
            const dogs = await response.json();
            dispatch(requestSuccessful(dogs.message));
        } catch (error) {
            dispatch(requestFailed(error))
        }
    };
};