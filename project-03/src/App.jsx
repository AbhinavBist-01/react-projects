import { useState } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);
  const [button, setbutton] = useState(true);
  async function setCatsFromAPI() {
    const url =
      "https://api.freeapi.app/api/v1/public/cats?query=sociable&page=1&limit=10";
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setCats(Array.isArray(data?.data?.data) ? data.data.data : []);
      setbutton(false);
    } catch (error) {
      console.error(error);
      setCats([]);
    }
  }

  return (
    <>
      <div className="app-shell">
        <h1>Random Cats</h1>
        <p className="subtitle">Tap to meet adorable, sociable floofs.</p>
        {button && (
          <button className="fetch-button" onClick={setCatsFromAPI}>
            Get Cats
          </button>
        )}
        <div className="cats-container">
          {cats.map((cat) => (
            <div key={cat.id} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
