// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt8cP0tNQmyMjSejOeqADK_P_1EiCSOEc",
  authDomain: "fir-crud-61917.firebaseapp.com",
  projectId: "fir-crud-61917",
  storageBucket: "fir-crud-61917.appspot.com",
  messagingSenderId: "1058377952042",
  appId: "1:1058377952042:web:30eb8bb72607e7f6ab8c53"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();