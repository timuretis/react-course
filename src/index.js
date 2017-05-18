import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Omelette', 'Pancake', 'Falafel', 'Waffles']
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
        <ul>
          { this.state.recipes.map(str => <li key={ str }>{ str } </li>) }
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input ref={ elem => this.titleElem = elem } type="text"/>
          <button>add</button>
        </form>
      </div>
    );
  }
}

const Header = ({ msg }) => (
  <h1>{ msg }</h1>
);

const App = () => (
  <div>
    <Header msg="hi" color="blue"/>
    <h2>Ezugi</h2>
    <Recipes />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
