const URL = 'https://s3.amazonaws.com/500tech-shared/recipes.json';

const apiMiddleware = ({ dispatch, getState }) => next => action => {

  if (action.type === 'FETCH_RECIPES') {

    fetch(URL)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_RECIPES', payload: data }))
      .catch(error => console.log(error))
  }

  next(action);
};

export default apiMiddleware;