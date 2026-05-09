import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = "https://api.freeapi.app/api/v1/public/randomproducts";
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setItems(data?.data?.data || []))
      .catch((fetchError) => {
        console.error("Error fetching products:", fetchError);
        setError("We could not load products right now.");
      })
      .finally(() => setLoading(false));
  }, []);

  const featuredItems = items.slice(0, 12);

  const formatPrice = (value) =>
    Number.isFinite(Number(value)) ? Number(value).toFixed(2) : "0.00";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 border-b border-slate-800 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">
            Amazon-style product page
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Products
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            A clean product listing focused on the items only, with a dark
            Amazon-inspired look.
          </p>
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-red-200">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-[420px] animate-pulse rounded-[26px] border border-slate-800 bg-slate-900/70"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredItems.map((item) => (
              <article
                key={item.id ?? item._id ?? item.name}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-black/30"
              >
                <div className="flex items-center justify-center bg-white p-6">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="h-52 w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    {item.category}
                  </span>

                  <h2 className="mt-4 line-clamp-2 text-lg font-bold leading-7 text-white">
                    {item.name}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-800 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                        Price
                      </p>
                      <p className="mt-1 text-2xl font-black text-amber-300">
                        ${formatPrice(item.price)}
                      </p>
                    </div>

                    <button className="rounded-full bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
