// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHp9ivUblHHs68haOdHRhML76-mK5kaKA",
  authDomain: "homeland-d54da.firebaseapp.com",
  projectId: "homeland-d54da",
  storageBucket: "homeland-d54da.appspot.com",
  messagingSenderId: "647821677656",
  appId: "1:647821677656:web:8b3ff5b3f0a441032ba62d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()