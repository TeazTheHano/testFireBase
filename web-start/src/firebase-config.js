// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcmtphFQ9wYeDdUF9qd20KX54rOFV6r1Y",
  authDomain: "friendlychat-teaz.firebaseapp.com",
  projectId: "friendlychat-teaz",
  storageBucket: "friendlychat-teaz.appspot.com",
  messagingSenderId: "487752807577",
  appId: "1:487752807577:web:6ba6e2599ba840b2ebb408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);