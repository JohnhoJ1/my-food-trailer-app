import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAld3znZwUb_iCSuO_-Xf9r4AMgjjw4tB4",
  authDomain: "my-food-trailer-app.firebaseapp.com",
  projectId: "my-food-trailer-app",
  storageBucket: "my-food-trailer-app.firebasestorage.app",
  messagingSenderId: "966781418960",
  appId: "1:966781418960:web:9846bd5bf80d64c69d0dd5",
  measurementId: "G-X0H829R275",
};

// Initialize Firebase app only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
