// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-f_O1ys0IzTM3YMokcXpSOuNwjRZb04",
  authDomain: "dragon-news-4d71e.firebaseapp.com",
  projectId: "dragon-news-4d71e",
  storageBucket: "dragon-news-4d71e.firebasestorage.app",
  messagingSenderId: "778655170721",
  appId: "1:778655170721:web:237a85bf9d774cdf7570e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
