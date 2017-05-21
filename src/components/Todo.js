import React from 'react';

const Todo = ({ completed, title }) => (
  <li className={ completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ completed } />
      <label>{ title }</label>
      <button className="destroy"></button>
    </div>
    <input className="edit" value="Create a TodoMVC template"/>
  </li>
);

Todo.propTypes = {
  completed: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Todo;