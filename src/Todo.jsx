import React, {useState} from 'react'

import Todoitems from './Todoitems';
import styles from './todo.module.css'
const Todo = () => {
const [value, setVelue] = useState("");
const [todos, setTodos] = useState([]);


  return (
    <div>
     <h3> Todo </h3>
      <input value={value}
      onChange={(e) =>{ setVelue(e.target.value);}}/>


    <button onClick={() => { setTodos([...todos,{ id: Date.now() ,value: value}])
           setVelue("");}}> ADD </button>
<div className={styles.todoList}>
  {todos.map((todo) => (

   <Todoitems key={todo.id} todo={todo}/>
    
  ))}
</div>
  
  </div>
  
  );
  };
 


export default Todo