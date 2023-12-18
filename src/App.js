import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "first todo" },
    { id: 2, title: "second todo" },
    { id: 3, title: "third todo" },
  ]);

  const [todoTitle, setTodoTitle] = useState("");

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //! useEffect работает один раз при рождении компонента
  // useEffect(() => {
  //   console.log("init");
  // }, []);

  //! useEffect будет работать при любом изменении в нашем компонента
  // useEffect(() => {
  //   console.log("hello");
  // });
  //! useEffect будет работать перед смертью компонента
  // useEffect(return () => {});

  // useEffect(() => {}, [todos]);

  const deleteItem = (id) => {
    const updateItem = todos.filter((elem) => elem.id !== id);
    setTodos(updateItem);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), title: todoTitle }]);
    setTodoTitle("");
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveEditTodo = (id) => {
    let newTodo = todos.map((elem) => {
      if (elem.id === id) {
        elem.title = value;
      }
      return elem;
    });
    setTodos(newTodo);
    setEdit(null);
  };
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Введите текст"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <TodoList
        saveEditTodo={saveEditTodo}
        value={value}
        setValue={setValue}
        todos={todos}
        deleteItem={deleteItem}
        edit={edit}
        editTodo={editTodo}
      />
    </>
  );
};

export default App;
