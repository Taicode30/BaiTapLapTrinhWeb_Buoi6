"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

const TodoList = ({tasks, ToggleTask} : {tasks: Task[], ToggleTask: (id: number) => void}) => {
  return (
    <ul className="w-full">
        {
            tasks.map((task) => (
                <TodoItem task = {task} ToggleTask={ToggleTask} />
            ))
        }
    </ul>
  )
}

export default TodoList