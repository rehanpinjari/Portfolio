// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "my-portfolio-cc891.firebaseapp.com",
  projectId: "my-portfolio-cc891",
  storageBucket: "my-portfolio-cc891.appspot.com",
  messagingSenderId: "1008175895439",
  appId: "1:1008175895439:web:fe7eeebac3e5ec211f71fa",
  measurementId: "G-BX9EJGMH19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
