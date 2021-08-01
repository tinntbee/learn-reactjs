import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onItemClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onItemClick: null,
};

function TodoList(props) {
  const { todoList, onItemClick } = props;

  const handleItemClick = (todo, idx) => {
    if (!onItemClick) return;
    onItemClick(todo, idx);
  };

  return (
    <ul>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleItemClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
