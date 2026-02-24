import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBucLhmNNPVWnPDf381IUZEndxbnYF2IE",
  authDomain: "personallearn-99172.firebaseapp.com",
  projectId: "personallearn-99172",
  storageBucket: "personallearn-99172.firebasestorage.app",
  messagingSenderId: "1090909528312",
  appId: "1:1090909528312:web:6cc09be9e32a8685715b0d",
  measurementId: "G-99GL04F7K1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
