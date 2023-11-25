// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGZViK1txHWHrJTSuyWcDkwo4PeCQBbD4",
  authDomain: "agun-news.firebaseapp.com",
  projectId: "agun-news",
  storageBucket: "agun-news.appspot.com",
  messagingSenderId: "698529033579",
  appId: "1:698529033579:web:03da1ee6787f9713bdf02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;