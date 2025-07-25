"use client";

import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {

  const [ tasks, setTask ] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
    { id: 3, title: "Deploy the App", completed: true }
  ])

  const [ newTask, setNewTask ] = useState("");

  const ToggleTask = (id: number) => {
    setTask(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  useEffect(() => {
    const saveTasks = localStorage.getItem('tasks');
    if (saveTasks) {
      setTask(JSON.parse(saveTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  

  const addTask = () => {
    if (newTask.trim() != "") {
      setTask([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false
        }
      ])
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-bold w-full text-center">TODO LIST</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your task here"
            className="border border-white p-2 bg-transparent text-white"
            onChange={(e) => setNewTask(e.target.value)}>
          </input>
          <button
          className="font-bold border border-white bg-white text-black p-2"
          onClick={addTask}>
            Add
          </button>
        </div>
        <TodoList tasks = { tasks } ToggleTask = { ToggleTask } /> 
      </main>
    </div>
  );
}
