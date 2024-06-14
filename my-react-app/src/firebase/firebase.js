// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFUMUjs1Z1P-rAoAvsee74kau6_U6ObYA",
  authDomain: "my-concerts-manager.firebaseapp.com",
  projectId: "my-concerts-manager",
  storageBucket: "my-concerts-manager.appspot.com",
  messagingSenderId: "316493633791",
  appId: "1:316493633791:web:95073935d463282054d4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };