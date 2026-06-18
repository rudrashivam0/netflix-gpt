// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjamAFu56sFa3ETuHc5LpwWDZocsxqrmU",
    authDomain: "netflixgpt-eea2f.firebaseapp.com",
    projectId: "netflixgpt-eea2f",
    storageBucket: "netflixgpt-eea2f.firebasestorage.app",
    messagingSenderId: "467433824286",
    appId: "1:467433824286:web:746ab221de8b59b3804e0f",
    measurementId: "G-EMK2YTBJZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 