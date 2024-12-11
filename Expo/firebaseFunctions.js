import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseModel";

const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

const logIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

const logOut = async () => {
  await signOut(auth);
};

const checkUserExists = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  return userDoc.exists();
};

const saveUserProfile = async (uid, profile) => {
  await setDoc(doc(db, "users", uid), profile);
};

export { signUp, logIn, logOut, checkUserExists, saveUserProfile };
