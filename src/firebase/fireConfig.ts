import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyDHn_CXVt6NNn6zbV0luzYNDUWwSbLX79U",
    authDomain: "card-game-a641f.firebaseapp.com",
    databaseURL: "https://card-game-a641f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "card-game-a641f",
    storageBucket: "card-game-a641f.appspot.com",
    messagingSenderId: "491402093774",
    appId: "1:491402093774:web:528b2145e03b87104ddc9f"
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
