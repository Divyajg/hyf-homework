import React from "react";
import RenderItem from "./renderItem";
const TodoList = (props) => {
  return (
    <ul>
      {props.todoItems.map((todo) => {
        return (
          <RenderItem
            key={todo.id}
            todoId={todo.id}
            todoExplained={todo.description}
            todoDeadline={todo.deadline}
            delete={props.delete}
            edit={props.edit}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
