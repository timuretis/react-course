const URL = 'https://s3.amazonaws.com/500tech-shared/recipes.json';

const api = ({ dispatch, getState }) => next => action => {

  if (action.type === 'FETCH_RECIPES') {
    fetch(URL)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_RECIPES', payload: data }))
  }

  next(action);
};

export default api;