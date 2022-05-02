import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDqWpNv6_3so0_ClUn_w4Gl0gMcTsBBRJY",
    authDomain: "hobustevoiduajamine.firebaseapp.com",
    databaseURL: "https://hobustevoiduajamine-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hobustevoiduajamine",
    storageBucket: "hobustevoiduajamine.appspot.com",
    messagingSenderId: "101490386955",
    appId: "1:101490386955:web:729db9c6d56d5b3a857f0e"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

 export default  db 