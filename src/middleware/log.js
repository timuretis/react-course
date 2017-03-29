window.actions = [];

const log = ({ getState, dispatch }) => next => action => {
  console.log(`ACTION: ${ action.type }`, action);

  window.actions.push(action);

  next(action);
};

export default log;
