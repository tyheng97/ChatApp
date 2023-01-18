// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD64cm58arl_KzFI0nloLFafSf2DLFFYeM",
  authDomain: "chat-422fc.firebaseapp.com",
  projectId: "chat-422fc",
  storageBucket: "chat-422fc.appspot.com",
  messagingSenderId: "700860604621",
  appId: "1:700860604621:web:dc1321a315979c68fc8984",
  measurementId: "G-99061T9J1Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
