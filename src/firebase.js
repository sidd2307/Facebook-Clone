import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCBSPA3zxKMQlgoGicjH4otghNojiruZGY",
    authDomain: "facebook-clone-290fb.firebaseapp.com",
    databaseURL: "https://fb.firebaseio.com",
    projectId: "facebook-clone-290fb",
    storageBucket: "facebook-clone-290fb.appspot.com",
    messagingSenderId: "457031512090",
    appId: "1:457031512090:web:1397417315f37b628921a3",
    measurementId: "G-XYFNLDRWWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db