import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBnMhV4iaEt7qQRRpSIw3fPofZMk6AUavE",
    authDomain: "web-programming-f7e0f.firebaseapp.com",
    databaseURL: "https://web-programming-f7e0f-default-rtdb.firebaseio.com",
    projectId: "web-programming-f7e0f",
    storageBucket: "web-programming-f7e0f.appspot.com",
    messagingSenderId: "160046272387",
    appId: "1:160046272387:web:c4bb1828a8740a349e30b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;