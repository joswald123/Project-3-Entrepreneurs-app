import * as firebase from 'firebase/app';
import "firebase/auth"

const fire = firebase.initializeApp({
    
    apiKey: "AIzaSyBRl32Dgcpg_6qfyTBpYnNTXDhEQNkNufA",
    authDomain: "entrepreneurs-app-c696f.firebaseapp.com",
    databaseURL: "https://entrepreneurs-app-c696f.firebaseio.com",
    projectId: "entrepreneurs-app-c696f",
    storageBucket: "entrepreneurs-app-c696f.appspot.com",
    messagingSenderId: "514271385582",
    appId: "1:514271385582:web:d5de64aa7faca83f"
    
});

export default fire;
