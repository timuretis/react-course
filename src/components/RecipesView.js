import React from 'react';
import Recipes from './Recipes';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';

class RecipesView extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="main">

        <div className="pane">
          <Recipes />
        </div>

        <div className="pane">
          { this.props.children }
        </div>

      </div>
    );
  }
}

RecipesView.propTypes = {
  fetchRecipes: React.PropTypes.func.isRequired
};

export default connect(null, { fetchRecipes })(RecipesView);









