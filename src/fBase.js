import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"; 

const firebaseConfig = {
    apiKey: "AIzaSyDR8tvZ_nXU_Yvf3m9fDSstpav1n0HCJGc",
    authDomain: "expense-tracker-91c95.firebaseapp.com",
    projectId: "expense-tracker-91c95",
    storageBucket: "expense-tracker-91c95.appspot.com",
    messagingSenderId: "982156523497",
    appId: "1:982156523497:web:1f3a7dca886f9d5a4b3d78"
  };

  export default firebase.initializeApp(firebaseConfig);

  export const TRANSACTIONS = "transactions";
  export const CATEGORIES = "categories";
  export const MAINCOLOR = "mainColor"

  export const dbService = firebase.firestore();