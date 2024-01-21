// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDMhAfQDB-suEGtWXIuXNZGMOVJflB-QuY",
    authDomain: "kazatel-portfolio.firebaseapp.com",
    databaseURL: "https://kazatel-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kazatel-portfolio",
    storageBucket: "kazatel-portfolio.appspot.com",
    messagingSenderId: "255270619385",
    appId: "1:255270619385:web:9a160b0f15d2965df83a28",
    measurementId: "G-CG67TFYYSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);