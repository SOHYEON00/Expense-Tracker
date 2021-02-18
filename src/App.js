import { dbService, CATEGORIES, MAINCOLOR } from 'fBase';
import React, {useEffect, useState} from 'react';
import AppRouter from "routes/Router";
import Footer from 'components/Footer';

function App() {
  const [categories, setCategories] = useState([]);
  const [mainColor, setMainColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const getSnapshotColor = async() => {
    dbService.collection(MAINCOLOR).onSnapshot((snapshot) => {
      const dbColor = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.mainColor,
      }));
      setMainColor(dbColor[0].mainColor);
      setBgColor(dbColor[0].bgColor);
    })
  }

  useEffect(() => {
    dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
  
      const categoryArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setCategories(categoryArray);
    });

    getSnapshotColor();
      // 모든 버튼 색상 변경
    const allSubmitBtns = document.querySelectorAll('.button');
    allSubmitBtns.forEach(e => e.style.setProperty('background-color', `${mainColor}`));

    return () => {}; //clean-up
  }, []);

  const styles = {
    forBg: {backgroundColor: bgColor}
  }


  return (
    <main className="App" style={styles.forBg}>
    <AppRouter categories={categories} mainColor={mainColor} />
    <Footer />
    </main>
  );
}

export default App;
