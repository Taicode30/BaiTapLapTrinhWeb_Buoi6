"use client";

import { Task } from "../page";

const TodoItem = ({task, ToggleTask} : {task: Task, ToggleTask: (id: number) => void}) => {
  return (
    <li className="w-full flex justify-between items-center">
        <span>
            {task.title}
        </span>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={() => ToggleTask(task.id)}
        />
    </li>
  )
}

export default TodoItem