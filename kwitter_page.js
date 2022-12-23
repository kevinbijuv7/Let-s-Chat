const firebaseConfig = {
      apiKey: "AIzaSyCbApg71l3V43BjfkfNs5_m99McsuQLB8k",
      authDomain: "let-s-chat-6d0c9.firebaseapp.com",
      databaseURL: "https://let-s-chat-6d0c9-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-6d0c9",
      storageBucket: "let-s-chat-6d0c9.appspot.com",
      messagingSenderId: "11495401375",
      appId: "1:11495401375:web:1fe84ea88c15977fb77faa",
      measurementId: "G-NKL39MW45J"
    };
 function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter.html"; 
 }
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag ="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like"+like+"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name). push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button -"+message_id);
      button_id=message_id;
      likes = document.getElementById(button_id).value;
            updated_likes =Number(likes) +1;
            console.log(updated_likes);

            firebase.database().ref(room_name).child(message_id).update({

            });
}

function logout()
{     
    localStorage.removeItem("room_name", name);
    localStorage.removeItem("user_name", name);
    window.location.replace("kwitter_page.html");
}