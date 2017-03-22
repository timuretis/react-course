import { getID } from './lib/ids';
import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(`Action: ${ action.type }`, action)

  switch (action.type) {
    case 'TOGGLE':

      const updatedRecipes = state.recipes
        .map(r => r.id !== action.id
          ? r
          : Object.assign({}, r, {
              favorite: !r.favorite
            })
      );

      return Object.assign({}, state, {
        recipes: updatedRecipes
      });

    case 'ADD':
      const newRecipe = {
        id: getID(),
        favorite: false,
        title: action.title
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Cat food', favorite: false },
    { id: getID(), title: 'Mice food', favorite: false },
    { id: getID(), title: 'Iguana food', favorite: false },
    { id: getID(), title: 'Dog food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;