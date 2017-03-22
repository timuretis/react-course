import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo =>
        <Todo key={ todo.title }
              toggle={ toggle }
              todo={ todo }/>
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default TodoList;