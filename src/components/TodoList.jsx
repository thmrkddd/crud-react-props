import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  deleteItem,
  edit,
  editTodo,
  value,
  setValue,
  saveEditTodo,
}) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem
            saveEditTodo={saveEditTodo}
            value={value}
            setValue={setValue}
            editTodo={editTodo}
            edit={edit}
            key={elem.id}
            {...elem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
