// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaBL33OqJ3kArW9w4knI_T8kSic64cJjQ",
  authDomain: "vite-contact-52ee6.firebaseapp.com",
  projectId: "vite-contact-52ee6",
  storageBucket: "vite-contact-52ee6.appspot.com",
  messagingSenderId: "133317868489",
  appId: "1:133317868489:web:ec1eec4d7878e4b2b4c618",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
