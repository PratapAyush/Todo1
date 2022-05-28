import React from "react";
import Todolist from "./todolist";
import Todoinput from "./todoinput";

const Todoapp = () => {
  const [todolist, setTodolist] = React.useState([]);

  const additem = (item) => {
    setTodolist([...todolist, item]);
    console.log(todolist);
  };
  return (
    <div>
      <h1 style={{color:"blue"}}>TODO APP</h1>
      <br />
      <br />
      <br />
      <Todolist todolist={todolist}/>
      <Todoinput additem={additem} />
    </div>
  );
};

export default Todoapp;