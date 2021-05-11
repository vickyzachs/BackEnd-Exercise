import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBoGjTA2-gPl0xDSTsod2zBSGy2G00E7uQ",
    authDomain: "back-end-3b581.firebaseapp.com",
    databaseURL: "https://back-end-3b581-default-rtdb.firebaseio.com",
    projectId: "back-end-3b581",
    storageBucket: "back-end-3b581.appspot.com",
    messagingSenderId: "752536559877",
    appId: "1:752536559877:web:9699ee84779e81332e976c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;