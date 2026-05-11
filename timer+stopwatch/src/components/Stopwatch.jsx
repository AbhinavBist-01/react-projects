import { useState, useEffect } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-card">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="second-revolution" aria-hidden="true">
        <div
          key={`${time}-${isRunning ? "running" : "stopped"}`}
          className={`second-ring ${isRunning ? "is-running" : ""}`}
        />
      </div>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-actions">
        <button type="button" onClick={handleStart}>
          Start
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
