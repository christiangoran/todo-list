import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoWrapper() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoWrapper;
