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
room_name = localStorage.getItem("room_name");

function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}