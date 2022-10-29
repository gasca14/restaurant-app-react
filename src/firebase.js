// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestor";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVfi8KlLmOnImT2wabdN8gPUM7-Y7TVk8",
  authDomain: "restaurant-app-11222.firebaseapp.com",
  projectId: "restaurant-app-11222",
  storageBucket: "restaurant-app-11222.appspot.com",
  messagingSenderId: "250592247721",
  appId: "1:250592247721:web:cf53ed14b775b5845f4eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)