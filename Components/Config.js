// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA0qFLeP2phEw3RH81NxM9uDRyIFdHQYv8",
  authDomain: "applogin-c78b6.firebaseapp.com",
  databaseURL: "https://applogin-c78b6-default-rtdb.firebaseio.com",
  projectId: "applogin-c78b6",
  storageBucket: "applogin-c78b6.appspot.com",
  messagingSenderId: "711897308293",
  appId: "1:711897308293:web:ce6913af07f49b82b75dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)