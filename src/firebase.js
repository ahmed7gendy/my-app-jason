// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// استبدل هذه القيم بالقيم الخاصة بمشروعك من Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyA2sikiw2_wYZ0jE5v62dj021Gu33b78eM",
    authDomain: "new-e-learning-edecs.firebaseapp.com",
    databaseURL: "https://new-e-learning-edecs-default-rtdb.firebaseio.com",
    projectId: "new-e-learning-edecs",
    storageBucket: "new-e-learning-edecs.appspot.com",
    messagingSenderId: "82033132236",
    appId: "1:82033132236:web:30aa4a6ef16e8251077869",
    measurementId: "G-CEZJRLPSW9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.database();
const storage = firebaseApp.storage();

export { auth, database, storage };

