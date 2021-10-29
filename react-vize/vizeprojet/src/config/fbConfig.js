
// Import the functions you need from the SDKs you need
import firebase  from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBPQuJ-vE0-XdA--ktvopkOjYOqIM2AXHA",
  authDomain: "vize-projet.firebaseapp.com",
  projectId: "vize-projet",
  storageBucket: "vize-projet.appspot.com",
  messagingSenderId: "265958130411",
  appId: "1:265958130411:web:4c906d9bfac65ae32bf4ae",
  measurementId: "G-38P3KE8Q12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.firestore().settings({timestampsInSnapshot: true});

export default firebase;