import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

const RecipesView = ({ rightPane }) => (
  <div className="main">

    <div className="pane">
      <Recipes />
    </div>

    <div className="pane">
      { rightPane || "Hello" }
    </div>

  </div>
);

export default RecipesView;