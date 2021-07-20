
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC4w14nHvrC2_3BDFc2VoEj4meQJACqgzo",
  authDomain: "kwitter-test-e8054.firebaseapp.com",
  databaseURL: "https://kwitter-test-e8054-default-rtdb.firebaseio.com",
  projectId: "kwitter-test-e8054",
  storageBucket: "kwitter-test-e8054.appspot.com",
  messagingSenderId: "538534832574",
  appId: "1:538534832574:web:97f62afd7fe01692b071ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();

