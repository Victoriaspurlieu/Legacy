//=======================================

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCdgLnE4X5II0AUhLuW_N0JjUhRIYzmKmo',
  authDomain: 'legacy-9be16.firebaseapp.com',
  databaseURL: 'https://legacy-9be16.firebaseio.com',
  projectId: 'legacy-9be16',
  storageBucket: 'legacy-9be16.appspot.com',
  messagingSenderId: '28478023899',
  appId: '1:28478023899:web:aecc927cd3508f86'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$('#submitStory').on('click', function() {
  event.preventDefault();
  var userName = $('#name-input')
    .val()
    .trim();

  var locationName = $('#locationName-input')
    .val()
    .trim();

  var story = $('#story-input')
    .val()
    .trim();

  $('#userName').text(userName);

  $('#volunteerLocation').text(locationName);

  $('#userStory').text(story);
});
// on click function get the still gifs

// $('#searchBtn').on('click', function(event) {
//   event.preventDefault();

//   // set Api request

// var appKey = 'oXJZmXZRMdr0XbDbiyPd0y0AfikCWfYo';
// var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20180101&end_date=20190501&fq=volunteer&q=volunteer+works&sort=relevance&api-key=' + appKey;

// $.ajax({
//   url: queryURL,
//   method: 'GET'
// }).then(function(response) {
//   console.log(response);
//   console.log(response.response.docs[4]);

//   var storyImg = response.response.docs[4].multimedia[18].url;

//   var title = response.response.docs[4].headline.main;

//   var summaryText = response.response.docs[4].abstract;

//   console.log(storyImg);

//   // append the result
//   //$('.card').html('<img src =' + storyImg);

//   $('.card-title').text(title);

//   $('.card-text').text(summaryText);
// });
