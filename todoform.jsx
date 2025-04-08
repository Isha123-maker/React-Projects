import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

export const Todoform = ({ onAddTodo }) => {
  // State to manage the input value as an object
  const [inputValue, setInputValue] = useState({});

  // Updates the input value based on user input
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  // Handles the form submission and clears the input field
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="w-full max-w-md">
      {/* Input form to add new tasks */}
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center bg-gray-900 rounded-full shadow-lg p-2 mb-8"
      >
        <input
          type="text"
          autoComplete="off"
          placeholder="Add a new task..."
          className="flex-grow h-12 px-4 text-white bg-transparent text-2xl rounded-l-full focus:outline-none placeholder-gray-400"
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button
          type="submit"
          className="px-6 h-12 bg-blue-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

// PropTypes validation for the Todoform component
Todoform.propTypes = {
  onAddTodo: PropTypes.func.isRequired, // Ensure onAddTodo is a required function
};
