import React from 'react';
import classNames from 'classnames';
import Counter from './Counter';


const Recipe = ({ recipe, toggleFavorite }) => (
  <li className={ classNames('recipe', { 'favorite': recipe.favorite }) }
      onClick={ () => toggleFavorite(recipe.id) } >
    { recipe.title }
    <Counter />
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;