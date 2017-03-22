import React from 'react';
import TodoList from './TodoList';

const MainView = ({ todos, toggle }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <TodoList todos={ todos } toggle={ toggle } />
  </section>
);

MainView.propTypes = {
  todos: React.PropTypes.array.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default MainView;