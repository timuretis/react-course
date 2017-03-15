import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Recipe from './components/Recipe';

const Recipes = ({ recipes }) => (
  <ul>
    {
      recipes.map(recipe =>
        <Recipe title={ recipe } key={ recipe }/>
      )
    }
  </ul>
);

class AddRecipe extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.cb(this.titleElem.value);

    this.titleElem.value = '';
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ (elem) => this.titleElem = elem } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

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
          <Header title="Recipes:" />
          <Recipes recipes={ this.state.recipes } />
          <AddRecipe cb={ this.addRecipe }  />
        </div>
      </div>
    )
  }
}

window.App = App;

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
