//LINKS FIREBASE
//ADICIONE SEUS LINKS FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyC3b3zbcR7dUSfmI-snzX5xKclbpa5fl80",
      authDomain: "eassimquefazmarkting.firebaseapp.com",
      databaseURL: "https://eassimquefazmarkting-default-rtdb.firebaseio.com",
      projectId: "eassimquefazmarkting",
     storageBucket: "eassimquefazmarkting.appspot.com",
      messagingSenderId: "722971396077",
      appId: "1:722971396077:web:8d79a7409e12288137c9e4"
      };
      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      userName = localstorage.getItem("userName");
      roomName = localStorage.getItem("roomName");



      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
            })
      }

      document.getElementById("msg").value = "";




function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
      console.log(firabase_messsge_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      
      row = name-with_tag + message_with_tag +like_mutton + span_with_tag;
      document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();


function updateLike(message_id)
{
      console/log("clicker on like buttob - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(roomName).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location.replace = ("index.html");
}