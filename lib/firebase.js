import firebase from 'firebase/app'
import 'firebase/auth'


  // Initialize Firebase
 
//this code means we don't want to initialize it multiple times
  if( !firebase.apps.length){
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: "fast-feedback-demo-d5bd8.appspot.com",
      messagingSenderId: "783859172696",
      appId: "1:783859172696:web:06e4354623752ddafb912d"
    })
  }


  export default firebase;