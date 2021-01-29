import React from 'react';
import AppRouter from "routes/Router";

function App() {
  return (
    <main className="App">
    <AppRouter />
    <footer>
      &copy; {new Date().getFullYear()} Expense Tracker - SOHYEON OH 오소현
    </footer>
    </main>
  );
}

export default App;
