import { useEffect, useState } from "react";

export const Tododate = () => {
  // State to store the current date and time
  const [dateTime, setDateTime] = useState("");

  // Effect to update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      const formattedDate = now.toLocaleDateString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-3xl text-white font-medium">{dateTime}</h2>;
};
