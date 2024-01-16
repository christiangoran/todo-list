import React from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import TodoSingleApp from "./components/TodoSingleApp";

function App() {
  return (
    <div className="App">
      <h1>Todo List!</h1>
      <TodoWrapper />
      {/* <TodoSingleApp /> */}
    </div>
  );
}

export default App;
