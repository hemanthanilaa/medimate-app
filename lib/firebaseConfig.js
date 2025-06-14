import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0AuHtfcunQ-e_HjBZZktcM65QNVHLMC0",
  authDomain: "medimate-app-657a1.firebaseapp.com",
  projectId: "medimate-app-657a1",
  storageBucket: "medimate-app-657a1.firebasestorage.app",
  messagingSenderId: "102438095652",
  appId: "1:102438095652:web:cc1fdafda14df4d252c1b1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);