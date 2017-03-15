import React from 'react';

import Header from './Header';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffel', 'Omelette', 'Pancake']
    };
  }

  addRecipe = (title) => {
    this.setState({
      recipes: this.state.recipes.concat(title)
    });
  };

  render() {
    return (
      <div>
        <div>

          <Header title="Hello">
            Welcome to <b>React</b>
          </Header>

          <Recipes recipes={ this.state.recipes } />

          <AddRecipe cb={ this.addRecipe }  />
        </div>
      </div>
    )
  }
}

export default App;