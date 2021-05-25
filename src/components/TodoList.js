import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, setTodos, filteredTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem 
                key={todo.id} 
                text={todo.text} 
                todo={todo}
                todos={todos}
                setTodos={setTodos}
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
