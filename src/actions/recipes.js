import * as actions from '../consts/action-types';

const action = {
  type: 'STRING',
  payload: {
    // DATA
  },
  meta: {
    // Extra data
  },
  error: new Error()
}

export const addRecipe = (title, description, favorite = false) => ({
  type: actions.ADD_RECIPE,
  payload: {
    title: title.trim(),
    description: description.trim(),
    favorite
  },
  meta: {
    analytics: {
      event: 'Add Recipe',
      data: { title }
    }
  }
});

export const fetchRecipes = () => ({
  type:'FETCH_RECIPES'
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  payload: id,
  meta: {
    debounce: 1000
  }
});