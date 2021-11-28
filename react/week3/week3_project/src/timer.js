import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <div>
      <p>
        You have used <span className="time">{time}</span> seconds on this
        website
      </p>
    </div>
  );
};

export default Timer;
