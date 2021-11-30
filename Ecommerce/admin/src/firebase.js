// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Z4YpcK9R2sUF2qeh9CCl8zbUJznQR94",
  authDomain: "ecommerce-b6513.firebaseapp.com",
  projectId: "ecommerce-b6513",
  storageBucket: "ecommerce-b6513.appspot.com",
  messagingSenderId: "859033513414",
  appId: "1:859033513414:web:2bea9ad346d97c311d56c7",
  measurementId: "G-DWPH7EK0DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;