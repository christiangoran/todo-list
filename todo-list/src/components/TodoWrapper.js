import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addItem = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  return (
    <div>
      <TodoForm addItem={addItem} />
      {todos.map((todo) => (
        <TodoList key={todo.id} task={todo} />
      ))}
    </div>
  );
}

export default TodoWrapper;
