var apiKey = 'user_key=dd6dab64b179a2bb9a93127562835ed8';

var searchResult = '';
var corbEnabler = 'https://cors-anywhere.herokuapp.com/';
var queryOrgHunter = 'https://data.orghunter.com/v1/charitysearch?';
var twitterApiTrending = 'https://api.twitter.com/1.1/trends/place.json?id=1';
var trendSpotterKey1 = 'ae8480dff3fa343b6d215da041939e3e';
var backupKeyTrendspottr = '3bdb237763a5006354063055aa678cce';
var trendSpotter = 'http://api.trendspottr.com/v1.5/search?key=' + backupKeyTrendspottr + '&q=?';
var nytSearch = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=disaster&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M';
var trendSpotterWord = 'volunteer';
var googleCustomSearchAPI = 'AIzaSyBjbsMhY3Ex-VPnna_MT9VkGJnyZFfzKqE';
var test = trendSpotter + trendSpotterWord;

var queryURL = test;

//             $.ajax({
//                 url: queryURL,
//                 method: "GET",
//             }).then(function (response) {
//                 // console.log(test)
//                 for(i=0;i<3;i++){

//                     var trendingResult = response.results.hashtags[i].value;
//                     var trendingTopics = $("<h2>").text(trendingResult);
//                     $("#testDiv").append(trendingTopics)
// }

// var imageQuery1 = response.results.hashtags[0].value
var imageQuery1 = '#Volunteer';
$('#hashtag1').text(imageQuery1);
var imageQuery1Word = imageQuery1.slice(1);
console.log(imageQuery1Word);

// var imageQuery2 = response.results.hashtags[1].value
var imageQuery2 = '#Save';
$('#hashtag2').text(imageQuery2);
var imageQuery2Word = imageQuery2.slice(1);
console.log(imageQuery2Word);

// var imageQuery3 = response.results.hashtags[2].value
var imageQuery3 = '#SaveThePlanet';
var imageQuery3Word = imageQuery3.slice(1);
$('#hashtag3').text(imageQuery3);
console.log(imageQuery3Word);

// $("#testDiv").append(trendingTopics)

var pixabayApi = '12500053-5110b31002f0fc8b89ed377c4';

var URL1 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery1Word);
var URL2 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery2Word);
var URL3 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery3Word);

var URL1alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('charity');
var URL2alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('');
var URL3alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('helping');
var randomizer = Math.floor(Math.random() * 3);
// START OF TRENDING IMAGE 1 ------->

$.getJSON(URL1, function(data) {
  if (parseInt(data.totalHits) == 0) {
    $.ajax({
      url: URL1alt,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[randomizer].largeImageURL + 'No Result');
      var imageLink = response.hits[randomizer].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic1').html(imageTrending);
    });
  } else {
    $.ajax({
      url: URL1,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[0].largeImageURL + 'else triggered');
      var imageLink = response.hits[0].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic1').html(imageTrending);
    });
  }
});

// END OF TRENDING IMAGE 1 ------->

// START OF TRENDING IMAGE 2 ------->

$.getJSON(URL2, function(data) {
  if (parseInt(data.totalHits) == 0) {
    $.ajax({
      url: URL2alt,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[randomizer].largeImageURL + 'No Result');
      var imageLink = response.hits[randomizer].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic2').html(imageTrending);
    });
  } else {
    $.ajax({
      url: URL2,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[0].largeImageURL + 'else triggered');
      var imageLink = response.hits[0].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic2').html(imageTrending);
    });
  }
});

// END OF TRENDING IMAGE 2 ------->

// START OF TRENDING IMAGE 3 ------->

$.getJSON(URL3, function(data) {
  if (parseInt(data.totalHits) == 0) {
    $.ajax({
      url: URL3alt,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[randomizer].largeImageURL + 'No Result');
      var imageLink = response.hits[randomizer].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic3').html(imageTrending);
    });
  } else {
    $.ajax({
      url: URL3,
      method: 'GET'
    }).then(function(response) {
      console.log(response.hits[0].largeImageURL + 'else triggered');
      var imageLink = response.hits[0].largeImageURL;
      var imageTrending = $('<img>')
        .attr('src', imageLink)
        .attr('class', 'd-block w-100');
      // ask how to insert the variable i to the ID so that it populates the next div
      $('#trendingTopic3').html(imageTrending);
    });
  }
});

// END OF TRENDING IMAGE 3 ------->
