// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDOyqYWgcYOT1eyyUb503vSi8OvLyMfS0",
  authDomain: "baingan-travels.firebaseapp.com",
  projectId: "baingan-travels",
  storageBucket: "baingan-travels.appspot.com",
  messagingSenderId: "623558553724",
  appId: "1:623558553724:web:92a6926195d33d6cb419f9",
  measurementId: "G-HLRQC0RMDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);