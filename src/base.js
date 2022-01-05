import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXFHHvEXTs2pBydPpQkF17lx4gW4sEMm8",
  authDomain: "very-hot-burgers-ce309.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-ce309-default-rtdb.firebaseio.com",

  //   projectId: "very-hot-burgers-ce309",
  //   storageBucket: "very-hot-burgers-ce309.appspot.com",
  //   messagingSenderId: "4953632153",
  //   appId: "1:4953632153:web:192020bf8a4710141fb708",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
