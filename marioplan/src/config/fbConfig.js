import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDylKlEa1wGbhxxCP4SQM91DFDS54dPmSE",
  authDomain: "vd-cafe.firebaseapp.com",
  databaseURL: "https://vd-cafe.firebaseio.com",
  projectId: "vd-cafe",
  storageBucket: "vd-cafe.appspot.com",
  messagingSenderId: "1050340061172",
  appId: "1:1050340061172:web:73400183655eb2344e53a1"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
