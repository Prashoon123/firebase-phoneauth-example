import firebase from "firebase";

const firebaseConfig = {
  // ENTER YOUR APP'S FIREBASE CONFIG
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth };
