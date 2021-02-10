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

    dbService.collection(MAINCOLOR).onSnapshot((snapshot) => {
      const dbColor = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.mainColor,
      }));
      setMainColor(dbColor[0].mainColor);
      setBgColor(dbColor[0].bgColor);
    })
  }, [bgColor]);

  const styles = {
    forButton: { backgroundColor: `${mainColor}`},
    forBg: {backgroundColor: bgColor}
  }

  return (
    <main className="App" style={styles.forBg}>
    <AppRouter categories={categories} mainColor={mainColor} btnStyle={styles.forButton}/>
    <Footer />
    </main>
  );
}

export default App;
