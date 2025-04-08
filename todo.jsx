import clsx from "clsx";
import { useState, useEffect } from "react";
import { Todoform } from "./todoform";
import { TodoList } from "./todolist";
import { Tododate } from "./tododate";
import { getLocalStorage, setLocalStorage } from "./todoLocalStorage";

export const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorage());

  // Handles adding a new task from the form
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifContentMatched = tasks.find(
      (currTask) => currTask.content === content
    );
    if (ifContentMatched) {
      alert("Task already exists");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, { id, content, checked }]);
  };

  useEffect(() => {
    setLocalStorage(tasks);
  }, [tasks]);

  const handleDeleteTodo = (value) => {
    const upDatedTask = tasks.filter((currTask) => currTask.content !== value);
    setTasks(upDatedTask);
  };

  const handleCheckTodo = (value) => {
    const upDatedTask = tasks.map((currTask) => {
      if (currTask.content === value) {
        return { ...currTask, checked: !currTask.checked };
      }
      return currTask;
    });
    setTasks(upDatedTask);
  };

  return (
    <div className={clsx(
      "flex flex-col justify-start min-h-screen bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white"
    )}>
      <section>
        {/* Main content */}
        <div className="flex flex-col items-center pt-10">
          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-8xl font-extrabold mb-2 text-white">Todo List</h1>
            <Tododate />
          </header>

          {/* Form */}
          <Todoform onAddTodo={handleFormSubmit} />

          {/* Task List */}
          <section className="w-full max-w-lg mt-6">
            <ul className="space-y-4">
              {tasks.map((currTask) => (
                <TodoList
                  key={currTask.id}
                  data={currTask.content}
                  checked={currTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckTodo={handleCheckTodo}
                />
              ))}
            </ul>
          </section>

          {/* Clear All Button */}
          <button
            className={clsx(
              "mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 hover:from-gray-500 hover:via-gray-400 hover:to-gray-600 focus:ring-4 focus:ring-gray-400"
            )}
            onClick={() => setTasks([])}
          >
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
};
