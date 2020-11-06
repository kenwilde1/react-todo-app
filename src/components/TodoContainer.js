import React from "react";
import TodoItem from "./TodoItem";

export default function TodoContainer() {
  return (
    <div className="todo-container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
