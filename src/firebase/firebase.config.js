// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvQMAsbMxRzWKE1QMIwuJmOcYuXGFyQWM",
  authDomain: "sell-today.firebaseapp.com",
  projectId: "sell-today",
  storageBucket: "sell-today.appspot.com",
  messagingSenderId: "630545760923",
  appId: "1:630545760923:web:3bc77f96e6bfe23d9afc3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;