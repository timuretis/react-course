import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = ({ title }) => (
  <h1>{ title }</h1>
);

const Recipe = ({ title }) => (
  <li onClick={ ()=> console.log('YEy') }>{ title }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    {
      recipes.map(recipe =>
        <Recipe title={ recipe } key={ recipe }/>
      )
    }
  </ul>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffel', 'Omelette', 'Pancake']
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      recipes: this.state.recipes.concat(this.titleElem.value)
    });

    this.titleElem.value = '';
  };

  render() {
    return (
      <div>
        <div>
          <Header title="Recipes:" />
          <Recipes recipes={ this.state.recipes } />

          <form onSubmit={ this.handleSubmit }>
            <input ref={ (elem) => this.titleElem = elem } type="text"/>
            <button>Add</button>
          </form>

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
