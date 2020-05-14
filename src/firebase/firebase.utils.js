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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;