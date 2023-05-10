// ADICIONE SUS LINKS FIREBASE AQUI
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
      
      // programe a função addUser():
      function addUser()
      {
      // Obtenha o nome do usuário a partir da input box, com a id da input box. E,armazene-o dentro de uma variável.
        userName = document.getElementById("UserName").value;
      // adicione o valor dessa variável ao firebase: 
        firebase.database().ref("/").child(userName).update({
          purpose:"adiciona o usuario"
        });
          
        
      }
      