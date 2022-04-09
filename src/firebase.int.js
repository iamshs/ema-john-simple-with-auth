// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHxxLwkQnjF6vamIw72EP5fxqwaGazpe0",
  authDomain: "ema-john-simple-with-auth.firebaseapp.com",
  projectId: "ema-john-simple-with-auth",
  storageBucket: "ema-john-simple-with-auth.appspot.com",
  messagingSenderId: "244993822192",
  appId: "1:244993822192:web:82c66900186a7e35436135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
