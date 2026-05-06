# ⚡ React Fetch Mini Projects
 
A collection of hands-on React mini projects focused on mastering the **Fetch API** — from basic GET requests to advanced patterns like pagination, authentication, and real-time polling.
 
---
 
## 📁 Project Structure
 
```
react-fetch-mini-projects/
├── 01-random-user-generator/
├── 02-post-request-form/
├── 03-loading-and-error-states/
├── 04-search-with-debounce/
├── 05-pagination/
├── 06-infinite-scroll/
├── 07-auth-with-headers/
├── 08-parallel-requests/
└── README.md
```
 
---
 
## 🚀 Projects Overview
 
### 01 · Basic GET Request
Fetch and display a list of users from a public API. Learn how to call `fetch()` inside `useEffect` and render the response.
 
**Concepts:** `fetch()`, `useEffect`, `useState`, JSON parsing
 
---
 
### 02 · POST Request with Form
Build a form that submits data to an API using a POST request. Handle the response and show a success/failure message.
 
**Concepts:** POST method, request headers, `Content-Type: application/json`, body serialization
 
---
 
### 03 · Loading & Error States
Add proper UX to your fetch calls — loading spinners while data loads, and friendly error messages when things go wrong.
 
**Concepts:** Error handling with `try/catch`, conditional rendering, loading booleans
 
---
 
### 04 · Search with Debounce
Build a live search bar that fetches results from an API as the user types, with debouncing to avoid hammering the server.
 
**Concepts:** Debouncing, controlled inputs, `useRef`, `clearTimeout`
 
---
 
### 05 · Pagination
Fetch paginated data and let the user navigate between pages using Previous / Next buttons.
 
**Concepts:** Query params, page state, disabling buttons at boundaries
 
---
 
### 06 · Infinite Scroll
Load more data automatically as the user scrolls to the bottom of the page.
 
**Concepts:** `IntersectionObserver`, appending data, scroll detection
 
---
 
### 07 · Auth with Headers
Make authenticated API requests by passing a Bearer token in the request headers.
 
**Concepts:** Authorization headers, token storage, protected routes
 
---
 
### 08 · Parallel Requests
Fire multiple fetch calls at the same time and wait for all of them to resolve using `Promise.all`.
 
**Concepts:** `Promise.all`, concurrent fetching, merging responses
 
---
 
## 🛠️ Getting Started
 
### Prerequisites
- Node.js v18+
- npm or yarn
### Installation
 
```bash
# Clone the repository
git clone https://github.com/your-username/react-fetch-mini-projects.git
 
# Navigate into any project folder
cd react-fetch-mini-projects/01-basic-get-request
 
# Install dependencies
npm install
 
# Start the development server
npm run dev
```
 
---
 
## 🌐 APIs Used
 
| Project | API |
|---|---|
| Basic GET | [JSONPlaceholder](https://jsonplaceholder.typicode.com) |
| Search | [Open Library](https://openlibrary.org/developers/api) |
| Pagination | [DummyJSON](https://dummyjson.com) |
| Infinite Scroll | [Unsplash](https://unsplash.com/developers) |
| Auth Headers | [ReqRes](https://reqres.in) |
 
---
 
## 📚 Key Concepts Covered
 
- Using `fetch()` vs `axios`
- `async/await` vs `.then()` chains
- Handling loading, success, and error states
- Cleaning up fetch with `AbortController`
- Sending headers, query params, and request bodies
- Pagination and infinite scroll patterns
- Running parallel API calls with `Promise.all`
---
 
## 💡 Tips & Best Practices
 
- Always handle errors — network requests can fail.
- Use `AbortController` to cancel fetch calls when a component unmounts.
- Debounce search inputs to reduce unnecessary API calls.
- Store sensitive tokens in `httpOnly` cookies, not `localStorage`.
- Use a custom `useFetch` hook to keep components clean and DRY.
---
 

 
## 📄 License
 
MIT — free to use, modify, and share.
 
---
 
> Built with ❤️ to learn React and the Fetch API one project at a time.
