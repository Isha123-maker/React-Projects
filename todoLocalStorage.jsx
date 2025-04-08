// Key for local storage
const todoKey = "tasks";

export const getLocalStorage = () => {
  const savedTasks = localStorage.getItem(todoKey);
  if (savedTasks) {
    return JSON.parse(savedTasks);
  }
  return [];
};

export const setLocalStorage = (tasks) => {
  // Handles adding data to local storage
  return localStorage.setItem(todoKey, JSON.stringify(tasks));
};
