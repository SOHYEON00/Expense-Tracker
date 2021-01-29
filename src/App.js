import { dbService, CATEGORIES } from 'fBase';
import React, {useEffect, useState} from 'react';
import AppRouter from "routes/Router";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
  
      const categoryArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setCategories(categoryArray);
    })
  }, [])


  return (
    <main className="App">
    <AppRouter categories={categories}/>
    <footer>
      &copy; {new Date().getFullYear()} Expense Tracker - SOHYEON OH 오소현
    </footer>
    </main>
  );
}

export default App;
