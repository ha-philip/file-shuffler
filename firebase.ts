// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGp_zshMgVW6M9PVrhtZDtrOsbnA8EtcE",
  authDomain: "file-shuffle.firebaseapp.com",
  projectId: "file-shuffle",
  storageBucket: "file-shuffle.appspot.com",
  messagingSenderId: "803915890020",
  appId: "1:803915890020:web:9b730f0be8a7bf7c244e71",
  measurementId: "G-1LFP0NWQY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);