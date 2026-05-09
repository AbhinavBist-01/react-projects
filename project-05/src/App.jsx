import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const url = "https://api.freeapi.app/api/v1/public/quotes";
    const options = { method: "GET", headers: { accept: "application/json" } };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setQuotes(data?.data?.data || []))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <>
      <main className="quotes-app">
        <section className="quotes-shell">
          <div className="quotes-heading">
            <span className="quotes-kicker">Daily inspiration</span>
            <h1>Quotes</h1>
            <p>
              Thoughtful lines from different voices, styled for a modern dark
              interface.
            </p>
          </div>

          <div className="quotes-grid">
            {quotes.map((quote) => (
              <article className="quote-card" key={quote.id}>
                <p className="quote-content">{quote.content}</p>
                <p className="quote-author">- {quote.author}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
