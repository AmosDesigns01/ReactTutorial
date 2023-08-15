import { click } from "@testing-library/user-event/dist/click";
import style from "./style.module.css";
import React, { useState } from 'react'

const TodoList = () => {
    // screating an interface for my task.
    interface TodoList{
        id: number,
        taskName: string,
        completed: boolean
    }

    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [input, setInput] = useState("");

    const taskChecked: boolean = false;
    

    // this function get the value of the input.
    const getInput = (event: any) => {
        event.preventDefault();
        const newInput = event.target.value;
        setInput(newInput);
    }

    // This function Add the new task to out task list.
    const addTaskToList = () =>{
        const newTask: TodoList = {
            id: Date.now(), // Example of generating a unique ID
            taskName: input,
            completed: taskChecked
        }
        setTodoList([...todoList, newTask]);
    }

    // This function is use to delete from our todolist.
    const taskDelete = (taskId: number) => {
        const newTodoList = todoList.filter((task) => {
            return task.id !== taskId
        });

        setTodoList(newTodoList);
    }

    // This function is use to complete our task
    const taskCompleted = (taskId: number) => {
        setTodoList(prevTasks =>
            prevTasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          );
    }


  return (
    <div className={style.App}>
        <h1 className={style.title}>Todo List</h1>
        
        {/* This is the input field containner */}
        <div className={style.input}>
            <input onChange={getInput} type="text"/>
            <button type="submit" onClick={addTaskToList}>Add Task</button>
        </div>

        <div className={style.list}>
            {
                todoList?.map((task) => {
                    return(
                        <div className={style.task} key={task.id}>
                            <button className={task.completed ? style.tick : style.untick} onClick={() => taskCompleted(task.id)}>&#10003;</button>
                                

                            <p className={task.completed ? style.complete : style.taskName}>{task.taskName}</p>
                            <button className={style.Delete} onClick={() => taskDelete(task.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoList