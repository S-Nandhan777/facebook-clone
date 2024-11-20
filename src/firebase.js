// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"; 
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsVAFWfVIydaLCY-iSnVqzDqLguQUgdyk",
  authDomain: "facebook-clone-318ba.firebaseapp.com",
  projectId: "facebook-clone-318ba",
  storageBucket: "facebook-clone-318ba.appspot.com",
  messagingSenderId: "281491412316",
  appId: "1:281491412316:web:09936a94a51c6743ea9d99",
  measurementId: "G-3EX81QNWK2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;