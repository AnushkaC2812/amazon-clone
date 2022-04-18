// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYk7KPKfage5lfjGRJNe9GWYCMDSHvho0",
    authDomain: "clone-7fd97.firebaseapp.com",
    projectId: "clone-7fd97",
    storageBucket: "clone-7fd97.appspot.com",
    messagingSenderId: "852073228215",
    appId: "1:852073228215:web:a3fe8346389a1e89686a32",
    measurementId: "G-8S45R5ZNRV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}