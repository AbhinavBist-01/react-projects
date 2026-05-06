import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url =
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUsers(data.data.data || []);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Random User Generator</h1>
        <button onClick={getUsers} className="get-users-btn">
          Get New Users
        </button>
      </header>
      <main className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.login.uuid}>
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-avatar"
            />
            <div className="user-info">
              <h2 className="user-name">
                {user.name.first} {user.name.last}
              </h2>
              <p className="user-email">{user.email}</p>
              <p className="user-location">
                {user.location.city}, {user.location.country}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
