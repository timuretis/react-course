import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerFooter from './components/InnerFooter';
import Header from './components/Header';
import MainView from './components/MainView';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Move to JSX', completed: true },
        { title: 'Divide to components', completed: true },
        { title: 'Add state', completed: true },
        { title: 'Toggle todo', completed: false }
      ]
    }
  }

  toggle = (todo) => {
    todo.completed = !todo.completed;
    this.forceUpdate();
  }

  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header add={ this.addTodo }/>
          <MainView todos={ this.state.todos } toggle={ this.toggle } />
          <InnerFooter />
        </section>

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
