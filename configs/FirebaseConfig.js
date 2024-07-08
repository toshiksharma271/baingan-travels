// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Enter api Key here!,Hiding due to Privacy reason!",
  authDomain: "baingan-travels.firebaseapp.com",
  projectId: "baingan-travels",
  storageBucket: "baingan-travels.appspot.com",
  messagingSenderId: "Hiding due to Privacy reason!",
  appId: "1:Hiding due to Privacy reason!",
  measurementId: "Hiding due to Privacy reason!"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
