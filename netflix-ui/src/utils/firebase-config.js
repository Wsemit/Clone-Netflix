
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpDDv2VJgomNi1BVQ6n6vO4LAwKfgAJ_g",
  authDomain: "react-netflix-9479d.firebaseapp.com",
  projectId: "react-netflix-9479d",
  storageBucket: "react-netflix-9479d.firebasestorage.app",
  messagingSenderId: "804921885393",
  appId: "1:804921885393:web:4db19ac7cfc33f6293bbf0",
  measurementId: "G-CX3GWNNTRW"
};

const app = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(app);