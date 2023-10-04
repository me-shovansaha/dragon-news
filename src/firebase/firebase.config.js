// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZivVZneY1HfUE6ZcRqLlyidJA_ljuXIk",
  authDomain: "dragon-news-ab050.firebaseapp.com",
  projectId: "dragon-news-ab050",
  storageBucket: "dragon-news-ab050.appspot.com",
  messagingSenderId: "95273067198",
  appId: "1:95273067198:web:c38f452111e28a9ef374ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;