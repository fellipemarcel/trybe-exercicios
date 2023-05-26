const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

export const clickActionCreator = (increment = 1) => ({
    type: 'INCREMENT_CLICK',
    payload: increment,
});

export default actionCreator;