import React from 'react'
import styles from './todo.module.css'


const Todoitems=({todo})=>{




  return (
    <div className={styles.todo} key={todo.id}>
      <input type="checkbox"/>
      <div>{todo.value} </div>
    </div>
  );
};

export default Todoitems;