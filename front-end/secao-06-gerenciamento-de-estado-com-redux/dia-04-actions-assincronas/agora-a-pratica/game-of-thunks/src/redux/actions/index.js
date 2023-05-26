export const actionTypes = {
    REQUEST_STARTED: 'REQUEST_STARTED',
    REQUEST_SUCCESSFUL: 'REQUEST_SUCCESSFUL',
    REQUEST_FAILURE: 'REQUEST_FAILURE'
};

const requestStarted = () => ({ type: actionTypes.REQUEST_STARTED });

const requestSuccesful = (character) => ({
    type: actionTypes.REQUEST_SUCCESSFUL,
    character,
});

const requestFailure = (error) => ({
    type: actionTypes.REQUEST_FAILURE,
    error,
});

export const fetchApi = (name) => {
    return async (dispatch) => {
        try {
            dispatch(requestStarted());
            const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
            const data = await response.json();
            console.log(data);
            dispatch(requestSuccesful(data));
        } catch (error) {
            dispatch(requestFailure(error));
        }
    };
};