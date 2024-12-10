import firebaseConfig from './firebaseConfig.js';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Auth with Persistent Storage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {
  db, 
  auth,
};
export default app;
