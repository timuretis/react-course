import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <ul>
    {
      recipes.map(recipe =>
        <Recipe title={ recipe }
                key={ recipe } />
      )
    }
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default Recipes;