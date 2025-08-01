// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpDDv2VJgomNi1BVQ6n6vO4LAwKfgAJ_g",
  authDomain: "react-netflix-9479d.firebaseapp.com",
  projectId: "react-netflix-9479d",
  storageBucket: "react-netflix-9479d.firebasestorage.app",
  messagingSenderId: "804921885393",
  appId: "1:804921885393:web:4db19ac7cfc33f6293bbf0",
  measurementId: "G-CX3GWNNTRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);