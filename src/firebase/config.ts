
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mais-todos.firebaseapp.com",
  projectId: "mais-todos",
  storageBucket: "mais-todos.appspot.com",
  messagingSenderId: "178716088498",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);