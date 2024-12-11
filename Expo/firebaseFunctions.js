import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
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

const fetchAllUsers = async () => {
  try {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);

    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export {
  signUp,
  logIn,
  logOut,
  checkUserExists,
  saveUserProfile,
  fetchAllUsers,
};
