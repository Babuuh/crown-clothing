import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqhenNtvoDMTbm9vrJIRBs0er721Bu_v4",
  authDomain: "crown-clothing-fbb87.firebaseapp.com",
  projectId: "crown-clothing-fbb87",
  storageBucket: "crown-clothing-fbb87.appspot.com",
  messagingSenderId: "311227053879",
  appId: "1:311227053879:web:7abd2ffb5d2a3b0bc74cb2",
  measurementId: "G-TMV8FDK6F8",
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firestore, auth, signInWithGoogle, createUserProfileDocument };
