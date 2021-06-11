var firebaseConfig = {
      apiKey: "AIzaSyD4bSSotxM7qnNXmmOpQvycb1B_1vZr5sk",
      authDomain: "kwitter-55e05.firebaseapp.com",
      databaseURL: "https://kwitter-55e05-default-rtdb.firebaseio.com",
      projectId: "kwitter-55e05",
      storageBucket: "kwitter-55e05.appspot.com",
      messagingSenderId: "193285087207",
      appId: "1:193285087207:web:201746734e8af022512742",
      measurementId: "G-MH8WK675SM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}