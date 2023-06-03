import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8ohkfVGeptO5YdblK8DuufhJtAy-urk8",
  authDomain: "entertainment-web-app-66f6f.firebaseapp.com",
  projectId: "entertainment-web-app-66f6f",
  storageBucket: "entertainment-web-app-66f6f.appspot.com",
  messagingSenderId: "127140613995",
  appId: "1:127140613995:web:fee4c8f0dcd1dc3705062e",
  measurementId: "G-6EY3ZQ8RNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
