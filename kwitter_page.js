//YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyAOjnjax_1RauzseSlCpfzTMVm_4buwtbk",
  authDomain: "twitterproject-fac4a.firebaseapp.com",
  databaseURL: "https://twitterproject-fac4a-default-rtdb.firebaseio.com",
  projectId: "twitterproject-fac4a",
  storageBucket: "twitterproject-fac4a.appspot.com",
  messagingSenderId: "405193556369",
  appId: "1:405193556369:web:356f299d4d60a2710e1a30"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
