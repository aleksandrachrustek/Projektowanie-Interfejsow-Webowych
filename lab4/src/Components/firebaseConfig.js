import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithEmailAndPasswordFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const registerWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  return signOut(auth);
};

export { auth, signInWithEmailAndPasswordFunction, signInWithGoogle, registerWithEmailAndPassword, logOut };
