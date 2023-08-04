import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBN8tEQm4ylKUmk0KBWVyBKQeBG7msTGsI",
  authDomain: "juliomodanezportfolio.firebaseapp.com",
  projectId: "juliomodanezportfolio",
  storageBucket: "juliomodanezportfolio.appspot.com",
  messagingSenderId: "912568576345",
  appId: "1:912568576345:web:c5ef9bc7482733ed248448",
  measurementId: "G-54CNFEG4J3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);