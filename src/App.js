import { dbService, CATEGORIES, MAINCOLOR } from 'fBase';
import React, {useEffect, useState} from 'react';
import AppRouter from "routes/Router";
import Footer from 'components/Footer';
import { changeBtnColor } from 'utilities/changeBtnColor';

function App() {
  const [categories, setCategories] = useState([]);
  const [mainColor, setMainColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const {SubmitBtn} = changeBtnColor({mainColor});

  useEffect(() => {
    //get category list from db
    dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
  
      const categoryArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setCategories(categoryArray);
    });

    //get mainColor from db
    dbService.collection(MAINCOLOR).onSnapshot((snapshot) => {
      const dbColor = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.mainColor,
      }));
      setMainColor(dbColor[0].mainColor);
      setBgColor(dbColor[0].bgColor);
    })
  
    // return () => {}; //clean-up
  }, []);


  const styles = {
    forBg: {backgroundColor: bgColor}
  }
  
  
  return (
    <main className="App" style={styles.forBg}>
    <AppRouter categories={categories} SubmitBtn={SubmitBtn} />
    <Footer />
    </main>
  );
}

export default App;
