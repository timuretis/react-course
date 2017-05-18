import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from 'components/Header';

class AddRecipe extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addRecipe(this.titleElem.value);

    this.titleElem.value = '';
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ elem => this.titleElem = elem } type="text"/>
        <button>add</button>
      </form>
    );
  }
}

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(str => <li key={ str }>{ str } </li>) }
  </ul>
);



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Omelette', 'Pancake', 'Falafel', 'Waffles']
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
        <Header msg="Hello everyone"/>

        <Recipes recipes={ this.state.recipes } />

        <AddRecipe addRecipe={ this.addRecipe }/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
