import React, { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center h-full ">
      <p className="text-lg">{formatDate(dateTime)}</p>
      <p className="text-lg">{formatTime(dateTime)}</p>
    </div>
  );
};

export default CurrentDateTime;
