// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBccvw5FKEmPYA86xhfqUEYs5invvQkHLg",
  authDomain: "yashwanth-paints.firebaseapp.com",
  projectId: "yashwanth-paints",
  storageBucket: "yashwanth-paints.appspot.com",
  messagingSenderId: "595707364466",
  appId: "1:595707364466:web:83309d573f900ad7012eeb",
  measurementId: "G-D93LJBRDPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);