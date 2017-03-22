import { getID } from './lib/ids';
import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(`Action: ${ action.type }`)

  switch (action.type) {
    case 'TOGGLE':
      action.recipe.favorite = !action.recipe.favorite;
      return Object.assign({}, state);

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Cat food', favorite: false },
    { id: getID(), title: 'Dog food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;