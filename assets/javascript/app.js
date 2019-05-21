
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



// TRENDING TOPICS API --- START HERE ---//

var apiKey = "user_key=dd6dab64b179a2bb9a93127562835ed8";

var searchResult = "";
var corbEnabler = "https://cors-anywhere.herokuapp.com/";
var queryOrgHunter = "https://data.orghunter.com/v1/charitysearch?"
var twitterApiTrending = "https://api.twitter.com/1.1/trends/place.json?id=1"
var trendSpotter = "http://api.trendspottr.com/v1.5/search?key=ae8480dff3fa343b6d215da041939e3e&q=?"
var nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=disaster&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
var trendSpotterKey = "charity";

var test = trendSpotter + trendSpotterKey;

// DO NOT USE THIS KEY, ONLY USE FOR PRESENTATION . API HAS 100 SEARCH LIMIT per MONTH
var backupKeyTrendspottr = "3bdb237763a5006354063055aa678cce";
// DO NOT USE THIS KEY, ONLY USE FOR PRESENTATION . API HAS 100 SEARCH LIMIT per MONTH


var queryURL = test;


// TRENDING TOPICS API --- END HERE ---//




