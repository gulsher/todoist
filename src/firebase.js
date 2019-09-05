import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.intializeApp({
    apiKey: "AIzaSyDNK-pubFF3mbMfezdp4EHnwnKK4gYtKa4",
    authDomain: "todoist-b968e.firebaseapp.com",
    databaseURL: "https://todoist-b968e.firebaseio.com",
    projectId: "todoist-b968e",
    storageBucket: "todoist-b968e.appspot.com",
    messagingSenderId: "199126106767",
    appId: "1:199126106767:web:6f548d397cde1425a6a6fa"
});

export {firebaseConfig as firebase};