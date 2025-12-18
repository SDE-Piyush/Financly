// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjY6AFFjtzVpBQdzfcWb_QgAcwUl7lAYI",
  authDomain: "financly-ftracker.firebaseapp.com",
  projectId: "financly-ftracker",
  storageBucket: "financly-ftracker.firebasestorage.app",
  messagingSenderId: "918309013620",
  appId: "1:918309013620:web:8ce11e2b71539da65e6921",
  measurementId: "G-3QKLCS5L50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};