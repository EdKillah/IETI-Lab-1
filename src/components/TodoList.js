import React from "react";
import { Todo } from "./Todo";

const TodoList = ({ tasks }) => {
  let content = [];
  tasks.forEach((todo, index) => {
    content.push(
      <Todo
        key={index}
        text={todo.text}
        priority={todo.priority}
        dueDate={todo.dueDate.toString()}
        className="col-md-3"
      />
    );
    if((index+1)%4===0) {content.push(<div className="w-100"></div>)}
  });  
  return <div className="row d-flex justify-content-center">{content}</div>;
};

export default TodoList;
