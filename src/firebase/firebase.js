import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import "firebase/functions";

const config = {
    apiKey: "AIzaSyApMXCufB_bONw_xTaT3rfCp3w__LqqRB8",
    authDomain: "deeper-game.firebaseapp.com",
    projectId: "deeper-game",
    storageBucket: "deeper-game.appspot.com",
    messagingSenderId: "158568336466",
    appId: "1:158568336466:web:71234a4d6ae94b0072638b",
    measurementId: "G-JTEXM2W66S"
};

class Firebase {

  constructor() {
    this.firebase = initializeApp(config);
    this.provider = new GoogleAuthProvider(); 
    this.auth = getAuth()
    this.db = getFirestore()
  }
  
}

export default Firebase;