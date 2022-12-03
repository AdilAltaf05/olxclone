// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaA3Cx3vw_fDab27iBOyN33wC0htyufYc",
  authDomain: "olxreact-40094.firebaseapp.com",
  projectId: "olxreact-40094",
  storageBucket: "olxreact-40094.appspot.com",
  messagingSenderId: "457005163401",
  appId: "1:457005163401:web:6deb4fdff5968360533758",
  measurementId: "G-S53YPSMYWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
