// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkry4ccJZBT0U-Wbt1ML6we4JQ-nT3nQ",
  authDomain: "todo-app-redo.firebaseapp.com",
  projectId: "todo-app-redo",
  storageBucket: "todo-app-redo.appspot.com",
  messagingSenderId: "959973960180",
  appId: "1:959973960180:web:2ee20d690d8b49ddadf1a1",
  measurementId: ""
};

// initialize firebase
const app = initializeApp(firebaseConfig) // initialize our app with firebase information; store it in variable "app"
const db = getFirestore() // whatever we have in Firestore, save it in variable "db"

export default db;
