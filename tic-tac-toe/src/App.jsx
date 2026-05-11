import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);
  const currentPlayer = xIsNext ? "X" : "O";

  function handleClick(index) {
    if (board[index] || winner) return;

    const nextBoard = [...board];
    nextBoard[index] = currentPlayer;

    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(currentBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "It’s a draw"
      : `Next: ${currentPlayer}`;

  return (
    <main className="game-shell">
      <section className="game-card" aria-label="Tic tac toe game">
        <p className="eyebrow">Classic game</p>
        <h1>Tic Tac Toe</h1>
        <p className="subtitle">Simple, fast, and clean.</p>

        <div className="status" aria-live="polite">
          {status}
        </div>

        <div className="board" role="grid" aria-label="Game board">
          {board.map((value, index) => (
            <button
              key={index}
              type="button"
              className="cell"
              onClick={() => handleClick(index)}
              disabled={Boolean(value) || Boolean(winner)}
              aria-label={`Cell ${index + 1}${value ? `, ${value}` : ""}`}
            >
              {value}
            </button>
          ))}
        </div>

        <button type="button" className="reset-button" onClick={resetGame}>
          Reset game
        </button>
      </section>
    </main>
  );
}

export default App;
