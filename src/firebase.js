import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyBGxSCSYjLSrQn9QGaiaTM2E0BfzwGIXBA",
        authDomain: "facebook-messenger-clone-d5731.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-d5731.firebaseio.com",
        projectId: "facebook-messenger-clone-d5731",
        storageBucket: "facebook-messenger-clone-d5731.appspot.com",
        messagingSenderId: "870976670689",
        appId: "1:870976670689:web:2534c6b8ddf8211be220a0",
        measurementId: "G-W3T6QZ7YLV"
})

const db = firebaseApp.firestore();

export default db;