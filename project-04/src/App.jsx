import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const url =
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1";
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setJokes(data?.data?.data || []))
      .catch((error) => console.error("Error fetching jokes:", error));
  }, []);

  return (
    <>
      <div>
        <h1>Joke Generator</h1>
        <p>Random jokes </p>
        <div>
          {jokes.map((joke) => (
            <div key={joke.id}>
              <p>{joke.content}</p>
              <h2>{joke.categories}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
