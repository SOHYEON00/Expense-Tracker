import { dbService, CATEGORIES, MAINCOLOR } from 'fBase';
import React, {useEffect, useState} from 'react';
import AppRouter from "routes/Router";
import Footer from 'components/Footer';

function App() {
  const [categories, setCategories] = useState([]);
  const [mainColor, setMainColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
  
      const categoryArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setCategories(categoryArray);
    });
  console.log(bgColor);
    dbService.collection(MAINCOLOR).onSnapshot((snapshot) => {
      const dbColor = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.mainColor,
      }));
      setMainColor(dbColor[0].mainColor);
      setBgColor(dbColor[0].bgColor);
    })
  }, []);

  return (
    <main className="App" style={{backgroundColor: `${bgColor}`}}>
    <AppRouter categories={categories} mainColor={mainColor}/>
    <Footer />
    </main>
  );
}

export default App;
