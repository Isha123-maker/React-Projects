import PropTypes from "prop-types";
import { TbChecks } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import clsx from "clsx";

export const TodoList = ({
  data,
  onHandleDeleteTodo,
  checked,
  onHandleCheckTodo,
}) => {
  return (
    <li className="flex items-center bg-gray-100 rounded-full shadow-md h-12 px-4">
      {/* Task content with conditional styling */}
      <span
        className={clsx("flex-grow text-2xl", {
          "text-gray-500 line-through": checked,
          "text-gray-800": !checked,
        })}
      >
        {data}
      </span>

      {/* Buttons for marking a task as done or deleting it */}
      <div className="flex space-x-2">
        <button
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          aria-label="Mark as done"
          onClick={() => onHandleCheckTodo(data)}
        >
          <TbChecks />
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          aria-label="Delete task"
          onClick={() => onHandleDeleteTodo(data)}
        >
          <MdDeleteSweep />
        </button>
      </div>
    </li>
  );
};

// PropTypes validation for TodoList component
TodoList.propTypes = {
  data: PropTypes.string.isRequired,
  onHandleDeleteTodo: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  onHandleCheckTodo: PropTypes.func,
};
