import style from "./style.module.css";
import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);


    // this function get the value of the input.
    const getInput = (event: any) => {
        const newInput = event.target.value;
        setInput(newInput);
    }

    // This function Add the new task to out task list.
    const addTaskToList = () =>{
        const newTask = [...todoList, input];
        setTodoList(newTask);
        setInput('');
    }

  return (
    <div className={style.App}>
        <h1 className={style.title}>Todo List</h1>
        
        {/* This is the input field containner */}
        <div className={style.input}>
            <input onChange={getInput} type="text"/>
            <button onClick={addTaskToList}>Add Task</button>
        </div>

        <div className={style.list}>
            {
                todoList?.map((task) => {
                    return(
                        <div key={task}>
                            <p>{task}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoList