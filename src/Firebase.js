import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsvJ9UeEqA83x2QxTbVVmo4tmchmtTkVE",
  authDomain: "linkedin-clone-60927.firebaseapp.com",
  projectId: "linkedin-clone-60927",
  storageBucket: "linkedin-clone-60927.appspot.com",
  messagingSenderId: "142213656284",
  appId: "1:142213656284:web:b9ca58bdd4ac148dd1ce19",
  measurementId: "G-TQEHQLCBQ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
