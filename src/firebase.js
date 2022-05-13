import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Wm4k2f-h-AcEVLrKxYmGsHIC7KGJj_0",
  authDomain: "slack-clone-c6a4c.firebaseapp.com",
  projectId: "slack-clone-c6a4c",
  storageBucket: "slack-clone-c6a4c.appspot.com",
  messagingSenderId: "441279412729",
  appId: "1:441279412729:web:6bd6d3397950e192dca528",
  measurementId: "G-Y2TBNMY090",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebase };
export default db;
