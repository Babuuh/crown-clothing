import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAqhenNtvoDMTbm9vrJIRBs0er721Bu_v4",
    authDomain: "crown-clothing-fbb87.firebaseapp.com",
    projectId: "crown-clothing-fbb87",
    storageBucket: "crown-clothing-fbb87.appspot.com",
    messagingSenderId: "311227053879",
    appId: "1:311227053879:web:7abd2ffb5d2a3b0bc74cb2",
    measurementId: "G-TMV8FDK6F8"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth()
  const db = firebaseApp.firestore()

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  const signInWithGoogle = () => auth.signInWithPopup(provider)

  
  
  export {db, auth, signInWithGoogle}
