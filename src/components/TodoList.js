import React from 'react';
import Todo from './Todo';

const TodoList = () => (
  <ul className="todo-list">
    <Todo completed={ true } title="Split into components" />
    <Todo completed={ false } title="Add state" />
    <Todo completed={ false } title="Make clickable" />
  </ul>
);

TodoList.propTypes = {
};

export default TodoList;