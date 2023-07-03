// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWVERlO4XIeFDnVIzbiR11zyOIdq_PXhs",
  authDomain: "ts34k-f2d85.firebaseapp.com",
  projectId: "ts34k-f2d85",
  storageBucket: "ts34k-f2d85.appspot.com",
  messagingSenderId: "357287214165",
  appId: "1:357287214165:web:08233369d690da5a6f28dc",
  measurementId: "G-9XVB0D489R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}
