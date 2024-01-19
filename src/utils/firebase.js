// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmR47IrjuaZY6lzCHfFziW4dJuOf0tOsA",
  authDomain: "netflixgpt-2ad98.firebaseapp.com",
  projectId: "netflixgpt-2ad98",
  storageBucket: "netflixgpt-2ad98.appspot.com",
  messagingSenderId: "678217180926",
  appId: "1:678217180926:web:13a3d196c4e132643f67af",
  measurementId: "G-B8WYMD5KW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();