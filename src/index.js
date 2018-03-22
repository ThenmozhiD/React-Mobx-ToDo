import React from "react";
import { render } from "react-dom";
import TodoList from './components/TodoList';
import ToDo from './components/Todo';
import TodoCompleted from './components/TodoCompleted';




render(
  <div className="container">
    <TodoList/>
    <ToDo/>
    <TodoCompleted/>

  </div>,
  document.getElementById("root")
);

