import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft <= 0) return;
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setInitialTime(0);
    setTimeLeft(0);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer-card">
      <h1 className="timer-title">Timer</h1>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <input
        className="timer-input"
        type="number"
        placeholder="Enter time in seconds"
        value={initialTime > 0 ? initialTime : ""}
        onChange={(e) => {
          const nextTime = parseInt(e.target.value, 10) || 0;
          setInitialTime(nextTime);
          setTimeLeft(nextTime);
        }}
      />
      <div className="timer-actions">
        <button type="button" onClick={handleStart}>
          Start
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  );
}
