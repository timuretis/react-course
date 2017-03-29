import { ADD_RECIPE, TOGGLE_FAVORITE } from '../consts/action-types';
import { getID } from '../lib/ids';

const initialState = [];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = Object.assign({}, action.payload, {
        id: getID(),
        favorite: false,
      });

      return recipes.concat(newRecipe);

    case TOGGLE_FAVORITE:
      return recipes.map(recipe =>
        recipe.id !== action.payload
          ? recipe
          : Object.assign({}, recipe, {
          favorite: !recipe.favorite
        })
      );

    case 'SET_RECIPES':
      return action.payload;

    default:
      return recipes;
  }
};

export default reducer;