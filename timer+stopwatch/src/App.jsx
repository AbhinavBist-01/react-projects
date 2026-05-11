import { useState } from "react";

import "./App.css";
import Timer from "./components/Timer.jsx";
import Stopwatch from "./components/Stopwatch.jsx";

function App() {
  const [isTimer, setIsTimer] = useState(true);

  return (
    <div className="app-shell">
      {isTimer ? <Timer /> : <Stopwatch />}
      <button className="toggle-button" onClick={() => setIsTimer(!isTimer)}>
        Switch to {isTimer ? "Stopwatch" : "Timer"}
      </button>
    </div>
  );
}

export default App;
