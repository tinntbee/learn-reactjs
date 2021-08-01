import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Task 1",
      status: "new",
    },
    {
      id: 2,
      title: "Task 2",
      status: "completed",
    },
    {
      id: 3,
      title: "Task 3",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const [filterStatus, setFilterStatus] = useState("all");

  const handleItemClick = (todo, idx) => {
    //clone new array
    const cloneTodoList = [...todoList];

    //toggle state
    cloneTodoList[idx] = {
      ...cloneTodoList[idx],
      status: cloneTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todo ist
    setTodoList(cloneTodoList);
  };

  const handleShowAll = () => {
    setFilterStatus("all");
  };

  const handleCompleted = () => {
    setFilterStatus("completed");
  };

  const handleNew = () => {
    setFilterStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onItemClick={handleItemClick} />

      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleCompleted}>Show Completed</button>
        <button onClick={handleNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
