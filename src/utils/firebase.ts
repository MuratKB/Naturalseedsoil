import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFqMpoJ2KK13qYiyD3LBGUdOg-1dKvZCs",
  authDomain: "naturalessenceshop-1f37a.firebaseapp.com",
  projectId: "naturalessenceshop-1f37a",
  storageBucket: "naturalessenceshop-1f37a.appspot.com",
  messagingSenderId: "1069225326423",
  appId: "1:1069225326423:web:128f48e3f55a4f57d7012",
  measurementId: "G-Y8QJECODNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;