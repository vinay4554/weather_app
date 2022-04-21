import React, { useState, useEffect } from "react";
import CurrentData from "./CurrentData";
function CurrentWeather() {
  const [time, setTime] = useState("00:00");
  const [day, setDay] = useState("");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleString([], {
        hour: "numeric",
        minute: "numeric",
      });
      setTime(time);
      setDay(days[date.getDay()]);
    }, 1);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <CurrentData time={time} day={day} />
    </div>
  );
}

export default CurrentWeather;
