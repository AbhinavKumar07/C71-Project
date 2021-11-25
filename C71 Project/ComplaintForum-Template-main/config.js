import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBXA7W_iH0oYRhI4UBv3N3hjSVqpqQ-s2s",
  authDomain: "complaint-forum-ce4c4.firebaseapp.com",
  projectId: "complaint-forum-ce4c4",
  storageBucket: "complaint-forum-ce4c4.appspot.com",
  messagingSenderId: "12164078384",
  appId: "1:12164078384:web:4645064997992c019586f5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

