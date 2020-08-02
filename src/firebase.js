import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCFlfLKPGFro0Ujqrx1DpnxzVrGxVluT3k",
        authDomain: "reactinstagram-c443e.firebaseapp.com",
        databaseURL: "https://reactinstagram-c443e.firebaseio.com",
        projectId: "reactinstagram-c443e",
        storageBucket: "reactinstagram-c443e.appspot.com",
        messagingSenderId: "500344455082",
        appId: "1:500344455082:web:c3f1e478ed9a52cf8eb5d3",
        measurementId: "G-HDB7F7K5QM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };