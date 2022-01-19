// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN8tEQm4ylKUmk0KBWVyBKQeBG7msTGsI",
  authDomain: "juliomodanezportfolio.firebaseapp.com",
  projectId: "juliomodanezportfolio",
  storageBucket: "juliomodanezportfolio.appspot.com",
  messagingSenderId: "912568576345",
  appId: "1:912568576345:web:c5ef9bc7482733ed248448",
  measurementId: "G-54CNFEG4J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);