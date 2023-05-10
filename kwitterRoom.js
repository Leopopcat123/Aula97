
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
  userName = localStorage.getItem("userName");
  

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";
}
