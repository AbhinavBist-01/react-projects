import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = async () => {
    const url =
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice";
    const options = { method: "GET", headers: { accept: "application/json" } };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    setDishes(data.data.data || []);
  };

  return (
    <div className="app-shell">
      <main className="app-card">
        <div className="app-header">
          <p className="eyebrow">Meal list</p>
          <h1>Dishes</h1>
          <p className="subtitle">
            A minimal list of rice dishes pulled from the API.
          </p>
        </div>

        <ul className="dish-list">
          {dishes.map((dish) => (
            <li key={dish.id} className="dish-item">
              <div>
                <h2>{dish.strMeal}</h2>
                <p>{dish.strCategory || "Uncategorized"}</p>
              </div>
              <span>{dish.strArea || "Unknown"}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
