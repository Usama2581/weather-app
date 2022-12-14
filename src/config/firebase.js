// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNuIlce16mjX1nt-4gAFFed95kklUorJI",
  authDomain: "weatherapp-66c04.firebaseapp.com",
  projectId: "weatherapp-66c04",
  storageBucket: "weatherapp-66c04.appspot.com",
  messagingSenderId: "545698748660",
  appId: "1:545698748660:web:9633de39e653dd547726a1",
  measurementId: "G-NVE31PQ834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);