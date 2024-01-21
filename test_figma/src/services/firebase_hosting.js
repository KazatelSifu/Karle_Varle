// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMhAfQDB-suEGtWXIuXNZGMOVJflB-QuY",
    authDomain: "kazatel-portfolio.firebaseapp.com",
    projectId: "kazatel-portfolio",
    storageBucket: "kazatel-portfolio.appspot.com",
    messagingSenderId: "255270619385",
    appId: "1:255270619385:web:9a160b0f15d2965df83a28",
    measurementId: "G-CG67TFYYSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);