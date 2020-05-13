import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCy8K2TcE-njXUmsaQG6iA-aLrzwT-HNWw",
    authDomain: "crwn-db-70b43.firebaseapp.com",
    databaseURL: "https://crwn-db-70b43.firebaseio.com",
    projectId: "crwn-db-70b43",
    storageBucket: "crwn-db-70b43.appspot.com",
    messagingSenderId: "701429677802",
    appId: "1:701429677802:web:3ef2a873d43ff2e7206193",
    measurementId: "G-LQXRT9T2W8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;