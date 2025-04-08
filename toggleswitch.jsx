import { createContext, useState, useContext } from "react";
import clsx from "clsx";

// eslint-disable-next-line react-refresh/only-export-components
export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <CustomThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(CustomThemeContext);

  return (
    <div
      className={clsx(
        "p-4 flex flex-col justify-center items-center h-lvh",
        theme === "dark" ? "bg-gray-800" : "bg-white"
      )}
    >
      <h1 className={clsx("py-4 " , theme === "light" ? "text-black" : "text-white")}>Toggle switch for changing Theme</h1>
      <button
        onClick={handleToggleTheme}
        className="p-4 bg-blue-700 hover:bg-blue-600 text-white rounded-2xl mt-6 w-[245px] h-[50px] text-3xl"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
