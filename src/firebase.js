//import firebase from "firebase";

import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCabhFBWksniRrBhDgL1T6x6Jxp33naPM8",
  authDomain: "netflix-clone-5d5f7.firebaseapp.com",
  projectId: "netflix-clone-5d5f7",
  storageBucket: "netflix-clone-5d5f7.appspot.com",
  messagingSenderId: "360775030195",
  appId: "1:360775030195:web:0b1b0811a08347070b67c6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const firebaseApp = initializeApp({ firebaseConfig });
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
