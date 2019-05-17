
// Log in user field

// $("#UserLogin").on("click", function(event) {
//   // prevent page from refreshing when form tries to submit itself
//   event.preventDefault();

//   // Capture user inputs and store them into variables
//   var email = $("#email").val().trim();
//   var password = $("#password").val().trim();

//   // Console log each of the user inputs to confirm we are receiving them
//   console.log(password);
//   console.log(email);
   
//   // Clear localStorage
//    localStorage.clear();

//    // Store all content into localStorage
//    localStorage.setItem("password", name);
//    localStorage.setItem("email", email);
   
//    // Firebase storage
// $(document).ready(function(){
//   var firebaseConfig = {
//       apiKey: "AIzaSyBgh5kI35MM6XEgRrKCcBY821rwIhc3xGI",
//       authDomain: "legacy-c812e-29e54.firebaseio.com/",
//       databaseURL: "https://legacy-c812e-29e54.firebaseio.com/",
//       projectId: "legacy-c812e",
//       storageBucket: "trainscheduler-4f890.appspot.com",
//       messagingSenderId: "816889149398",
//       appId: "1:816889149398:web:678379ab534c7f9b"
//     };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);

//   // A variable to reference the database.
//   var database = firebase.database();
 
//   // Pushing to database
//  database.ref().push({
//   email: email,
//   password: password,
// });

// $("form")[0].reset();
// });

// database.ref().on("child_added", function(childSnapshot) {

  
//       // Error handling
//   }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
// });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//   $("#email").html(snapshot.val().name);
//   $("#password").html(snapshot.val().email);
  
// });
// });

  
      
$(document).ready(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyBgh5kI35MM6XEgRrKCcBY821rwIhc3xGI",
    authDomain: "legacy-c812e-29e54.firebaseapp.com",
    databaseURL: "https://legacy-c812e-29e54.firebaseio.com",
    projectId: "legacy-c812e",
    storageBucket: "legacy-c812e.appspot.com",
    messagingSenderId: "1073529002893",
    appId: "1:1073529002893:web:ecbdc3b00d39c9d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // A variable to reference the database.
  var database = firebase.database();

  $("#UserLogin").on("click", function(event) {
    event.preventDefault();

      var email = $("#email").val().trim();
      var password = $("#password").val().trim();

      // Pushing to database
        database.ref().push({
        email: email,
        password: password,
        
      });
     
  });

  database.ref().on("child_added", function(childSnapshot) {
     
  // Error handling
  }, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
  });

  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      $("#email").html(snapshot.val().email);
      $("#password").html(snapshot.val().password);
     
  });
});