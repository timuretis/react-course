import React from 'react';

const Todo = ({ todo, toggle }) => {
  const { completed, title } = todo;

  return (
    <li className={ completed ? "completed" : "" }>
      <div className="view">
        <input className="toggle"
               type="checkbox"
               onChange={ () => toggle(todo) }
               checked={ completed } />

        <label>{ title }</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="Create a TodoMVC template"/>
    </li>
  );
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default Todo;
