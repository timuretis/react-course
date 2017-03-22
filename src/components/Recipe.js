import React from 'react';
import classNames from 'classnames';
import Total from './Total';

const Recipe = ({ recipe, toggleFavorite }) => (
  <li className={ classNames('recipe', { 'favorite': recipe.favorite }) }
      onClick={ () => toggleFavorite(recipe.id) } >
    { recipe.title } <Total />
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;