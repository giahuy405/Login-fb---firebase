

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQk26WvaB_tzBD15DxdVGS4sfnDGcSj-U",
  authDomain: "tuyendung-cf251.firebaseapp.com",
  projectId: "tuyendung-cf251",
  storageBucket: "tuyendung-cf251.appspot.com",
  messagingSenderId: "356098396495",
  appId: "1:356098396495:web:08a153ad8e6737c944753a",
  measurementId: "G-NL6QZ97S4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export {auth, provider}