import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/recipes';
import { Link } from 'react-router';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul className="recipes">
    { recipes.map(recipe =>
      <Recipe key={ recipe.id }
              recipe={ recipe }
              toggleFavorite={ toggleFavorite } /> )}
    <Link to="/add">Add Recipe</Link>
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

const ConnectedRecipes = connect(
  mapStateToProps, { toggleFavorite })(Recipes);

export default ConnectedRecipes;