// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09BdyI4beHpizs83Z-lnjFURElU3pvl0",
  authDomain: "react-portfolio-shivang.firebaseapp.com",
  projectId: "react-portfolio-shivang",
  storageBucket: "react-portfolio-shivang.appspot.com",
  messagingSenderId: "493136156213",
  appId: "1:493136156213:web:fa557ac8567b71f637c37c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();